const CosmicGroupManager = require('./cosmic-group-manager');

module.exports = async (req, res) => {
    const { action, groupId, data } = req.body;
    const user = await authenticateUser(req);
    
    try {
        switch (action) {
            case 'create':
                if (!user.hasWriterSubscription) {
                    return res.status(403).json({ error: 'Writer subscription required' });
                }
                const group = await CosmicGroupManager.createGroup(data, user);
                res.json(group);
                break;
                
            case 'add_member':
                await CosmicGroupManager.addMember(groupId, data.userId, user);
                res.json({ success: true });
                break;
                
            case 'send_message':
                await CosmicGroupManager.sendMessage(groupId, data.message, user);
                res.json({ success: true });
                break;
                
            default:
                res.status(400).json({ error: 'Invalid action' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};