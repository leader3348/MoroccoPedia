/**
 * MoroccoPedia — Multi-language translations
 * Languages: Arabic (ar) · French (fr) · English (en) · Spanish (es)
 */

const translations = {

  // ── Navigation ──────────────────────────────────────────────
  nav: {
    home:        { ar: 'الرئيسية',     fr: 'Accueil',      en: 'Home',        es: 'Inicio' },
    map:         { ar: 'الخريطة',      fr: 'Carte',        en: 'Cultural Map', es: 'Mapa' },
    dictionary:  { ar: 'القاموس',      fr: 'Dictionnaire', en: 'Dictionary',  es: 'Diccionario' },
    community:   { ar: 'المجتمع',      fr: 'Communauté',   en: 'Community',   es: 'Comunidad' },
    tourism:     { ar: 'السياحة',      fr: 'Tourisme',     en: 'Tourism',     es: 'Turismo' },
    ai:          { ar: 'الذكاء الاصطناعي', fr: 'IA',       en: 'AI Features', es: 'IA' },
    login:       { ar: 'تسجيل الدخول', fr: 'Connexion',    en: 'Login',       es: 'Iniciar sesión' },
    register:    { ar: 'إنشاء حساب',   fr: "S'inscrire",   en: 'Register',    es: 'Registrarse' },
    profile:     { ar: 'ملفي',         fr: 'Mon profil',   en: 'My Profile',  es: 'Mi perfil' },
    logout:      { ar: 'خروج',         fr: 'Déconnexion',  en: 'Logout',      es: 'Cerrar sesión' },
    planVisit:   { ar: 'خطط لزيارتك',  fr: 'Planifier',    en: 'Plan Visit',  es: 'Planificar' },
  },

  // ── Homepage ────────────────────────────────────────────────
  home: {
    eyebrow:     { ar: 'موسوعة المغرب الحية', fr: "L'encyclopédie vivante du Maroc", en: "Morocco's Living Encyclopedia", es: 'La enciclopedia viva de Marruecos' },
    title1:      { ar: 'اكتشف',        fr: 'Découvrez',    en: 'Discover',    es: 'Descubre' },
    title2:      { ar: 'المغرب',       fr: 'le Maroc',     en: 'Morocco',     es: 'Marruecos' },
    title3:      { ar: 'مدينة بمدينة', fr: 'ville par ville', en: 'City by City', es: 'ciudad por ciudad' },
    subtitle:    { ar: 'منصة وطنية لاستكشاف المدن والعامية والتقاليد المغربية', fr: 'Plateforme nationale pour explorer les villes, dialectes et traditions marocaines', en: 'National platform for exploring Moroccan cities, dialects and living heritage', es: 'Plataforma nacional para explorar ciudades, dialectos y patrimonio marroquí' },
    exploreMap:  { ar: 'استكشف الخريطة', fr: 'Explorer la carte', en: 'Explore the Map', es: 'Explorar el Mapa' },
    openDict:    { ar: 'فتح القاموس',  fr: 'Ouvrir le dictionnaire', en: 'Open Dictionary', es: 'Abrir Diccionario' },
    cities:      { ar: 'مدينة',        fr: 'Villes',       en: 'Cities',      es: 'Ciudades' },
    dialectWords:{ ar: 'كلمة عامية',   fr: 'Mots en darija', en: 'Dialect Words', es: 'Palabras' },
    traditions:  { ar: 'تقليد',        fr: 'Traditions',   en: 'Traditions',  es: 'Tradiciones' },
    diaspora:    { ar: 'مغترب',        fr: 'Diaspora',     en: 'Diaspora',    es: 'Diáspora' },
    searchPlaceholder: { ar: 'ابحث عن مدينة أو كلمة أو تقليد...', fr: 'Rechercher une ville, un mot ou une tradition...', en: 'Search a city, dialect word or tradition...', es: 'Buscar ciudad, palabra o tradición...' },
    wordOfDay:   { ar: 'كلمة اليوم',   fr: 'Mot du jour',  en: 'Word of the Day', es: 'Palabra del día' },
    regionalMap: { ar: 'كيف تتغير هذه الكلمة عبر المغرب', fr: 'Comment ce mot change à travers le Maroc', en: 'How this word changes across Morocco', es: 'Cómo cambia esta palabra por Marruecos' },
    exploreCities: { ar: 'استكشف المغرب مدينة بمدينة', fr: 'Explorer le Maroc ville par ville', en: 'Explore Morocco City by City', es: 'Explorar Marruecos ciudad por ciudad' },
  },

  // ── Auth ────────────────────────────────────────────────────
  auth: {
    loginTitle:       { ar: 'تسجيل الدخول',    fr: 'Connexion',              en: 'Login',              es: 'Iniciar sesión' },
    registerTitle:    { ar: 'إنشاء حساب',       fr: 'Créer un compte',        en: 'Create Account',     es: 'Crear cuenta' },
    name:             { ar: 'الاسم الكامل',      fr: 'Nom complet',            en: 'Full Name',          es: 'Nombre completo' },
    email:            { ar: 'البريد الإلكتروني', fr: 'Email',                  en: 'Email',              es: 'Correo electrónico' },
    password:         { ar: 'كلمة المرور',       fr: 'Mot de passe',           en: 'Password',           es: 'Contraseña' },
    confirmPassword:  { ar: 'تأكيد كلمة المرور', fr: 'Confirmer mot de passe', en: 'Confirm Password',   es: 'Confirmar contraseña' },
    city:             { ar: 'مدينتك',            fr: 'Votre ville',            en: 'Your City',          es: 'Tu ciudad' },
    preferredLang:    { ar: 'اللغة المفضلة',     fr: 'Langue préférée',        en: 'Preferred Language', es: 'Idioma preferido' },
    loginBtn:         { ar: 'دخول',              fr: 'Se connecter',           en: 'Sign In',            es: 'Entrar' },
    registerBtn:      { ar: 'إنشاء حساب',        fr: "S'inscrire",             en: 'Create Account',     es: 'Crear cuenta' },
    noAccount:        { ar: 'ليس لديك حساب؟',    fr: "Pas de compte?",         en: "Don't have an account?", es: '¿Sin cuenta?' },
    hasAccount:       { ar: 'لديك حساب بالفعل؟', fr: 'Déjà un compte?',        en: 'Already have an account?', es: '¿Ya tienes cuenta?' },
    forgotPassword:   { ar: 'نسيت كلمة المرور؟', fr: 'Mot de passe oublié?',   en: 'Forgot password?',   es: '¿Olvidaste tu contraseña?' },
    welcomeBack:      { ar: 'مرحباً بعودتك',     fr: 'Bon retour!',            en: 'Welcome back!',      es: '¡Bienvenido de vuelta!' },
    loginSuccess:     { ar: 'تم تسجيل الدخول بنجاح', fr: 'Connexion réussie', en: 'Logged in successfully', es: 'Sesión iniciada exitosamente' },
    registerSuccess:  { ar: 'تم إنشاء الحساب',   fr: 'Compte créé avec succès', en: 'Account created successfully', es: 'Cuenta creada exitosamente' },
    logoutSuccess:    { ar: 'تم تسجيل الخروج',   fr: 'Déconnecté',             en: 'Logged out',         es: 'Sesión cerrada' },
  },

  // ── Dictionary ──────────────────────────────────────────────
  dialect: {
    title:           { ar: 'قاموس الدارجة المغربية', fr: 'Dictionnaire du dialecte marocain', en: 'Moroccan Dialect Dictionary', es: 'Diccionario del dialecto marroquí' },
    subtitle:        { ar: 'اكتشف آلاف الكلمات بالتنويعات الإقليمية', fr: 'Découvrez les variations régionales de chaque mot', en: 'Discover 12,000+ Darija words with regional variations', es: 'Descubre palabras en darija con variaciones regionales' },
    searchPlaceholder: { ar: 'ابحث بالدارجة أو العربية أو الفرنسية...', fr: 'Rechercher en darija, arabe ou français...', en: 'Search Darija, Arabic or French...', es: 'Buscar en darija, árabe o francés...' },
    search:          { ar: 'بحث',                 fr: 'Rechercher',     en: 'Search',              es: 'Buscar' },
    wordOfDay:       { ar: 'كلمة اليوم',          fr: 'Mot du jour',    en: 'Word of the Day',     es: 'Palabra del día' },
    regionalVariants:{ ar: 'التنويعات الإقليمية', fr: 'Variations régionales', en: 'Regional Variations', es: 'Variaciones regionales' },
    quickTranslation:{ ar: 'ترجمة سريعة',        fr: 'Traduction rapide', en: 'Quick Translation', es: 'Traducción rápida' },
    translate:       { ar: 'ترجم',               fr: 'Traduire',       en: 'Translate',           es: 'Traducir' },
    compareRegions:  { ar: 'مقارنة لهجتين',       fr: 'Comparer deux régions', en: 'Compare Two Regions', es: 'Comparar dos regiones' },
    compare:         { ar: 'مقارنة',             fr: 'Comparer',       en: 'Compare',             es: 'Comparar' },
    noResults:       { ar: 'لم يُعثر على نتائج', fr: 'Aucun résultat', en: 'No results found',    es: 'Sin resultados' },
    browseByLetter:  { ar: 'تصفح بالحرف',         fr: 'Parcourir par lettre', en: 'Browse by Letter', es: 'Navegar por letra' },
    saveWord:        { ar: 'حفظ الكلمة',          fr: 'Sauvegarder',   en: 'Save Word',           es: 'Guardar palabra' },
    saved:           { ar: 'محفوظ',              fr: 'Sauvegardé',    en: 'Saved',               es: 'Guardado' },
    differences:     { ar: 'اختلاف',             fr: 'différences trouvées', en: 'differences found', es: 'diferencias encontradas' },
  },

  // ── Community ───────────────────────────────────────────────
  community: {
    title:       { ar: 'التراث المجتمعي',       fr: 'Patrimoine communautaire', en: 'Community Heritage',   es: 'Patrimonio comunitario' },
    subtitle:    { ar: 'شارك قصصك وسجل التراث', fr: 'Partagez vos histoires',   en: 'Share stories and preserve heritage', es: 'Comparte historias y preserva el patrimonio' },
    submit:      { ar: 'شارك قصتك',             fr: 'Soumettre votre histoire',  en: 'Submit Your Story',    es: 'Enviar tu historia' },
    yourName:    { ar: 'اسمك',                  fr: 'Votre nom',                en: 'Your Name',            es: 'Tu nombre' },
    yourCity:    { ar: 'مدينتك',                fr: 'Votre ville',              en: 'Your City',            es: 'Tu ciudad' },
    category:    { ar: 'الفئة',                 fr: 'Catégorie',                en: 'Category',             es: 'Categoría' },
    yourStory:   { ar: 'قصتك',                  fr: 'Votre histoire',           en: 'Your Story',           es: 'Tu historia' },
    submitBtn:   { ar: 'إرسال',                 fr: 'Soumettre',                en: 'Submit',               es: 'Enviar' },
    thanks:      { ar: 'شكراً لك!',             fr: 'Merci!',                   en: 'Thank you!',           es: '¡Gracias!' },
  },

  // ── Tourism ─────────────────────────────────────────────────
  tourism: {
    title:       { ar: 'وضع السياحة',           fr: 'Mode tourisme',            en: 'Tourism Mode',         es: 'Modo turismo' },
    subtitle:    { ar: 'اكتشف المغرب كمحلي',    fr: 'Découvrez le Maroc comme un local', en: 'Experience Morocco Like a Local', es: 'Experimenta Marruecos como un local' },
    phrases:     { ar: 'عبارات الدارجة الأساسية', fr: 'Phrases essentielles en darija', en: 'Essential Darija Phrases', es: 'Frases esenciales en darija' },
    tapToCopy:   { ar: 'اضغط للنسخ',            fr: 'Appuyer pour copier',      en: 'Tap to copy',          es: 'Toca para copiar' },
    copied:      { ar: 'تم النسخ',              fr: 'Copié',                    en: 'Copied',               es: 'Copiado' },
  },

  // ── Profile ─────────────────────────────────────────────────
  profile: {
    title:         { ar: 'ملفي الشخصي',          fr: 'Mon profil',               en: 'My Profile',           es: 'Mi perfil' },
    editProfile:   { ar: 'تعديل الملف',           fr: 'Modifier le profil',       en: 'Edit Profile',         es: 'Editar perfil' },
    savedWords:    { ar: 'الكلمات المحفوظة',      fr: 'Mots sauvegardés',         en: 'Saved Words',          es: 'Palabras guardadas' },
    contributions: { ar: 'مساهماتي',              fr: 'Mes contributions',         en: 'My Contributions',     es: 'Mis contribuciones' },
    points:        { ar: 'النقاط',                fr: 'Points',                   en: 'Points',               es: 'Puntos' },
    member:        { ar: 'عضو منذ',               fr: 'Membre depuis',            en: 'Member since',         es: 'Miembro desde' },
    settings:      { ar: 'الإعدادات',             fr: 'Paramètres',               en: 'Settings',             es: 'Configuración' },
    notifications: { ar: 'الإشعارات',             fr: 'Notifications',            en: 'Notifications',        es: 'Notificaciones' },
    language:      { ar: 'اللغة',                 fr: 'Langue',                   en: 'Language',             es: 'Idioma' },
    saveChanges:   { ar: 'حفظ التغييرات',          fr: 'Enregistrer',              en: 'Save Changes',         es: 'Guardar cambios' },
    deleteAccount: { ar: 'حذف الحساب',             fr: 'Supprimer le compte',      en: 'Delete Account',       es: 'Eliminar cuenta' },
  },

  // ── Notifications ───────────────────────────────────────────
  notifications: {
    title:      { ar: 'الإشعارات',               fr: 'Notifications',            en: 'Notifications',        es: 'Notificaciones' },
    markAllRead:{ ar: 'تحديد الكل كمقروء',        fr: 'Tout marquer comme lu',    en: 'Mark all as read',     es: 'Marcar todo como leído' },
    noNotifs:   { ar: 'لا إشعارات جديدة',         fr: 'Aucune notification',       en: 'No notifications',     es: 'Sin notificaciones' },
    unread:     { ar: 'غير مقروء',                fr: 'Non lu',                   en: 'Unread',               es: 'No leído' },
  },

  // ── General ─────────────────────────────────────────────────
  general: {
    loading:     { ar: 'جار التحميل...',          fr: 'Chargement...',            en: 'Loading...',           es: 'Cargando...' },
    error:       { ar: 'حدث خطأ',                fr: 'Une erreur est survenue',   en: 'An error occurred',    es: 'Ocurrió un error' },
    save:        { ar: 'حفظ',                    fr: 'Sauvegarder',              en: 'Save',                 es: 'Guardar' },
    cancel:      { ar: 'إلغاء',                  fr: 'Annuler',                  en: 'Cancel',               es: 'Cancelar' },
    confirm:     { ar: 'تأكيد',                  fr: 'Confirmer',                en: 'Confirm',              es: 'Confirmar' },
    delete:      { ar: 'حذف',                    fr: 'Supprimer',                en: 'Delete',               es: 'Eliminar' },
    back:        { ar: 'رجوع',                   fr: 'Retour',                   en: 'Back',                 es: 'Volver' },
    seeAll:      { ar: 'عرض الكل',               fr: 'Voir tout',                en: 'See all',              es: 'Ver todo' },
    apiOnline:   { ar: 'الخادم متصل',             fr: 'API en ligne',             en: 'API Online',           es: 'API conectada' },
    apiOffline:  { ar: 'الخادم غير متصل',         fr: 'API hors ligne',           en: 'API Offline',          es: 'API desconectada' },
  },
};

// ── Helper: get translation ──────────────────────────────────
export const t = (key, lang = 'en') => {
  const parts = key.split('.');
  let obj = translations;
  for (const part of parts) {
    if (!obj[part]) return key;
    obj = obj[part];
  }
  return obj[lang] || obj['en'] || key;
};

export default translations;
