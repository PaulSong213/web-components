import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/introduction',
    name: 'Introduction',
    component: () => import('../components/Introduction.vue')
  },
  {
    path: '/gmail-redesign',
    name: 'GMailRedesign',
    component: () => import('../components/GMailRedesign.vue')
  },
  {
    path: '/scheadule',
    name: 'Scheadule',
    component: () => import('../components/Scheadule.vue')
  },
  {
    path: '/city-nature.vue',
    name: 'City x Nature.vue',
    component: () => import('../components/CityNature.vue')
  },
  {
    path: '/holographic',
    name: 'Holographic',
    component: () => import('../components/Holographic.vue')
  },
  {
    path: '/payment-form',
    name: 'Payment Form.vue',
    component: () => import('../components/PaymentForm.vue')
  },
  {
    path: '/adaptive-design',
    name: 'Adaptive Design.vue',
    component: () => import('../components/AdaptiveDesign.vue')
  },
  {
    path: '/tiktok-shop',
    name: 'Tiktok Shop',
    component: () => import('../components/TiktokShop.vue')
  },
  {
    path: '/blend-image',
    name: 'Blend Image',
    component: () => import('../components/BlendImage.vue')
  },
  {
    path: '/grid-theme',
    name: 'Grid Theme',
    component: () => import('../components/GridTheme.vue')
  },
  {
    path: '/todo-app',
    name: 'Todo App',
    component: () => import('../components/TodoApp.vue')
  },
  {
    path: '/floating-label',
    name: 'Floating Label',
    component: () => import('../components/FloatingLabel.vue')
  },
  {
    path: '/password-toggle',
    name: 'Password Toggle',
    component: () => import('../components/PasswordToggle.vue')
  },
  {
    path: '/smart-watch',
    name: 'Smart Watch',
    component: () => import('../components/SmartWatch.vue')
  },
  {
    path: '/more-options',
    name: 'More Options',
    component: () => import('../components/MoreOptions.vue')
  },
  {
    path: '/instagram-clone',
    name: 'Instagram Clone',
    component: () => import('../components/InstagramClone.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('../components/Counter.vue')
  },
  {
    path: '/music-player',
    name: 'Music Player',
    component: () => import('../components/MusicPlayer.vue')
  },
  {
    path: '/number-dashboard',
    name: 'Number Dashboard',
    component: () => import('../components/NumberDashboard.vue')
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: () => import('../components/Tabs.vue')
  },
  {
    path: '/neumorphism',
    name: 'Neumorphism',
    component: () => import('../components/Neumorphism.vue')
  },
  {
    path: '/paginated-form',
    name: 'PaginatedForm',
    component: () => import('../components/PaginatedForm.vue')
  },
  {
    path: '/pin',
    name: 'Pin',
    component: () => import('../components/Pin.vue')
  },
  {
    path: '/e-commerce',
    name: 'ECommerce',
    component: () => import('../components/ECommerce.vue')
  },
  {
    path: '/feedback-card',
    name: 'FeedbackCard',
    component: () => import('../components/FeedbackCard.vue')
  },
  {
    path: '/riot-lol',
    name: 'LolArcane',
    component: () => import('../components/LolArcane.vue')
  },
  {
    path: '/modern-sidebar',
    name: 'ModernSidebar',
    component: () => import('../components/ModernSidebar.vue')
  },
  {
    path: '/rgb-store',
    name: 'RGBStore',
    component: () => import('../components/RGBStore.vue')
  },
  {
    path: '/send-message-button',
    name: 'SendMessageButton',
    component: () => import('../components/SendMessageButton.vue')
  },
  {
    path: '/shop-category',
    name: 'ShopCategory',
    component: () => import('../components/ShopCategory.vue')
  },

  {
    path: '/tiktok-navigation',
    name: 'TiktokNavigation',
    component: () => import('../components/TiktokNavigation.vue')
  },
  {
    path: '/toggle-dark-mode',
    name: 'ToggleDarkMode',
    component: () => import('../components/ToggleDarkMode.vue')
  },
  { 
    path: "/:catchAll(.*)",
    component: () => import('../components/PageNotFound.vue')   
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
