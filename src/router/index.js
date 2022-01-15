import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/introduction',
    name: 'Introduction',
    component: () => import('../components/Introduction.vue')
  },
  {
    path: '/subscribe-input',
    name: 'Subscribe Input',
    component: () => import('../components/SubscribeInput.vue')
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import('../components/Food.vue')
  },
  {
    path: '/tourism-swipe',
    name: 'Tourism Swipe',
    component: () => import('../components/TourismSwipe.vue')
  },
  {
    path: '/movie-selection',
    name: 'Movie Selection',
    component: () => import('../components/MovieSelection.vue')
  },
  {
    path: '/online-course-maker',
    name: 'Online Course Maker',
    component: () => import('../components/OnlineCourseMaker.vue')
  },
  
  {
    path: '/hexagon-navbar',
    name: 'Hexagon Navbar',
    component: () => import('../components/HexagonNavbar.vue')
  },
  {
    path: '/tictactoe',
    name: 'Tictactoe',
    component: () => import('../components/Tictactoe.vue')
  },
  {
    path: '/os-portfolio',
    name: 'OS Portfolio',
    component: () => import('../components/OSPortfolio.vue')
  },
  {
    path: '/login-signup',
    name: 'Login Signup',
    component: () => import('../components/LoginSignup.vue')
  },
  {
    path: '/restaurant-menu',
    name: 'Restaurant Menu',
    component: () => import('../components/RestaurantMenu.vue')
  },
  {
    path: '/responsive-sidebar',
    name: 'Responsive Sidebar',
    component: () => import('../components/ResponsiveSidebar.vue')
  },
  {
    path: '/step-by-step-form',
    name: 'Step By Step Form',
    component: () => import('../components/StepByStepForm.vue')
  },
  {
    path: '/address-ph',
    name: 'Address Ph',
    component: () => import('../components/AddressPh.vue')
  },
  {
    path: '/blurred-calendar',
    name: 'Blurred Calendar',
    component: () => import('../components/BlurredCalendar.vue')
  },
  {
    path: '/tourism',
    name: 'Tourism',
    component: () => import('../components/Tourism.vue')
  },
  {
    path: '/most-common-words',
    name: 'Most Common Words',
    component: () => import('../components/MostCommonWords.vue')
  },
  {
    path: '/blurred-login-page',
    name: 'Blurred Login Page',
    component: () => import('../components/BlurredLoginPage.vue')
  },
  {
    path: '/domain-checker',
    name: 'Domain Checker',
    component: () => import('../components/DomainChecker.vue')
  },
  {
    path: '/color-palette',
    name: 'Color Palette',
    component: () => import('../components/ColorPalette.vue')
  },
  {
    path: '/icon-generator',
    name: 'Icon Generator',
    component: () => import('../components/IconGenerator.vue')
  },
  {
    path: '/grow-shrink-menu',
    name: 'Grow Shrink Menu',
    component: () => import('../components/GrowShrinkMenu.vue')
  },
  {
    path: '/image-hover',
    name: 'Image Hover',
    component: () => import('../components/ImageHover.vue')
  },
  {
    path: '/old-school',
    name: 'Old School',
    component: () => import('../components/OldSchool.vue')
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
