// Enhanced TrustBookAI with Multi-language Support
class CosmicTrustBookAI {
    constructor() {
        this.supportedLanguages = this.loadAllLanguages();
        this.currentLanguage = 'en';
        this.userPlan = this.getUserPlan();
    }

    loadAllLanguages() {
        // All Google Translate supported languages
        return {
            'en': 'English',
            'hu': 'Hungarian',
            'es': 'Spanish',
            'fr': 'French',
            'de': 'German',
            'it': 'Italian',
            'pt': 'Portuguese',
            'ru': 'Russian',
            'zh': 'Chinese',
            'ja': 'Japanese',
            'ko': 'Korean',
            'ar': 'Arabic',
            'hi': 'Hindi',
            // ... add all other languages
        };
    }

    async generateCosmicEbook(topic, language, style, features) {
        // Enhanced AI generation with multi-language support
        const prompt = this.buildCosmicPrompt(topic, language, style, features);
        
        try {
            const response = await this.callCosmicAI(prompt);
            return this.formatCosmicOutput(response, language, features);
        } catch (error) {
            console.error('Cosmic generation failed:', error);
            return this.generateFallbackContent(topic, language);
        }
    }

    buildCosmicPrompt(topic, language, style, features) {
        return `
        Create a professional ebook about "${topic}" in ${this.supportedLanguages[language]}.
        
        STYLE: ${style}
        FEATURES: ${features.join(', ')}
        LANGUAGE: ${language}
        
        Include:
        - Engaging introduction
        - 5-7 detailed chapters
        - Practical examples
        - Professional formatting
        - ${language}-specific cultural references
        
        Make it suitable for digital publication.
        `;
    }
}

// Group Management System
class CosmicGroupManager {
    constructor() {
        this.userGroups = [];
        this.publicGroups = [];
    }

    async createGroup(groupData) {
        if (!this.hasWriterSubscription()) {
            throw new Error('Writer subscription required for group creation');
        }

        const group = {
            id: this.generateCosmicId(),
            ...groupData,
            created: new Date(),
            members: [currentUser.id],
            admins: [currentUser.id],
            chat: []
        };

        this.userGroups.push(group);
        await this.saveGroup(group);
        return group;
    }

    async addMember(groupId, userId) {
        const group = this.getGroup(groupId);
        if (!this.isGroupAdmin(groupId)) {
            throw new Error('Only admins can add members');
        }

        group.members.push(userId);
        await this.updateGroup(group);
    }

    async sendGroupMessage(groupId, message) {
        const group = this.getGroup(groupId);
        if (!group.members.includes(currentUser.id)) {
            throw new Error('Not a group member');
        }

        group.chat.push({
            userId: currentUser.id,
            message: message,
            timestamp: new Date(),
            userName: currentUser.name
        });

        await this.updateGroup(group);
        this.emitGroupUpdate(groupId);
    }
}

// Enhanced Ebook Maker with Slide Effects
class CosmicEbookMaker {
    constructor() {
        this.currentEbook = null;
        this.templates = this.loadCosmicTemplates();
        this.effects = this.loadSlideEffects();
    }

    loadCosmicTemplates() {
        return {
            'cosmic': {
                name: 'Cosmic',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                colors: ['#fff', '#e91e63', '#00bcd4'],
                fonts: ['Inter', 'Arial']
            },
            'nebula': {
                name: 'Nebula', 
                background: 'linear-gradient(45deg, #9c27b0 0%, #e91e63 50%, #00bcd4 100%)',
                colors: ['#fff', '#ffd700', '#c0c0c0'],
                fonts: ['Georgia', 'Times New Roman']
            },
            'stellar': {
                name: 'Stellar',
                background: 'linear-gradient(135deg, #1a237e 0%, #4a2c8b 50%, #9c27b0 100%)',
                colors: ['#fff', '#00bcd4', '#ffd700'],
                fonts: ['Arial', 'Helvetica']
            }
        };
    }

    loadSlideEffects() {
        return {
            'fade': 'fade-in 0.5s ease-in',
            'slide': 'slide-in-right 0.5s ease-out',
            'zoom': 'zoom-in 0.3s ease',
            'cosmic': 'cosmic-enter 1s ease-out'
        };
    }

    applyTemplate(templateName) {
        const template = this.templates[templateName];
        if (!template) return;

        this.currentEbook.template = template;
        this.updatePreview();
    }

    addSlideEffect(effectName) {
        const effect = this.effects[effectName];
        if (effect && this.userHasPremium()) {
            this.currentEbook.effects.push(effect);
            this.updatePreview();
        }
    }

    updatePreview() {
        const preview = document.getElementById('previewContent');
        if (preview && this.currentEbook) {
            preview.style.animation = this.currentEbook.effects.join(', ');
            preview.style.background = this.currentEbook.template.background;
        }
    }
}

// Marketplace System
class CosmicMarketplace {
    constructor() {
        this.products = [];
        this.chats = new Map();
    }

    async publishEbook(ebookData) {
        const product = {
            id: this.generateProductId(),
            ...ebookData,
            seller: currentUser,
            published: new Date(),
            price: ebookData.price || 0,
            rating: 0,
            reviews: [],
            chatEnabled: true
        };

        this.products.push(product);
        await this.saveProduct(product);
        return product;
    }

    async startChat(productId, buyerId) {
        const chatId = `${productId}_${buyerId}`;
        
        if (!this.chats.has(chatId)) {
            this.chats.set(chatId, {
                participants: [currentUser.id, buyerId],
                messages: [],
                productId: productId,
                created: new Date()
            });
        }

        return this.chats.get(chatId);
    }

    async sendMessage(chatId, message) {
        const chat = this.chats.get(chatId);
        if (!chat || !chat.participants.includes(currentUser.id)) {
            throw new Error('Cannot access this chat');
        }

        chat.messages.push({
            userId: currentUser.id,
            message: message,
            timestamp: new Date(),
            userName: currentUser.name
        });

        this.emitChatUpdate(chatId);
    }
}

// Initialize all systems
document.addEventListener('DOMContentLoaded', function() {
    // Initialize managers
    window.cosmicAI = new CosmicTrustBookAI();
    window.groupManager = new CosmicGroupManager();
    window.ebookMaker = new CosmicEbookMaker();
    window.marketplace = new CosmicMarketplace();

    // Load user data
    loadUserData();
    initializeEventListeners();
    updateUIBasedOnPlan();
});

function initializeEventListeners() {
    // Ebook generation
    document.getElementById('generateEbookBtn').addEventListener('click', generateWithCosmicAI);
    
    // Group creation
    document.getElementById('createGroupBtn').addEventListener('click', createCosmicGroup);
    
    // Marketplace interactions
    document.getElementById('marketplaceSearch').addEventListener('input', searchProducts);
    
    // Subscription handling
    document.querySelectorAll('.pricing-card .cta-button').forEach(btn => {
        btn.addEventListener('click', handleSubscription);
    });
}

function updateUIBasedOnPlan() {
    const userPlan = getUserPlan();
    
    // Show/hide features based on plan
    const groupFeatures = document.querySelectorAll('.groups-feature');
    const premiumFeatures = document.querySelectorAll('.premium-feature');
    
    if (userPlan === 'free') {
        groupFeatures.forEach(el => el.style.display = 'none');
        premiumFeatures.forEach(el => el.style.opacity = '0.5');
    } else if (userPlan === 'writer') {
        groupFeatures.forEach(el => el.style.display = 'block');
        premiumFeatures.forEach(el => el.style.opacity = '0.7');
    } else if (userPlan === 'business') {
        groupFeatures.forEach(el => el.style.display = 'block');
        premiumFeatures.forEach(el => el.style.opacity = '1');
    }
}

// Watermark system
function applyWatermark(ebookContent, userPlan) {
    if (userPlan === 'free' || userPlan === 'writer') {
        return `
        <div class="watermarked-content">
            ${ebookContent}
            <div class="trustbook-watermark">
                <img src="logo.png" alt="TheTrustBook">
                <span>Created with TheTrustBook</span>
            </div>
        </div>
        `;
    }
    return ebookContent; // No watermark for business users
}
   