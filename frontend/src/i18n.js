// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome",
          "Find everything you need to make the perfect meal": "Find everything you need to make the perfect meal",
          "About": "About",
          "Search for products": "Search for products",
          "Search": "Search",
          "Daily Deals": "Daily Deals",
          "Price": "Price",
          "Show product": "Show product",
          "#SOME_WORKSHOPS": "#SOME_WORKSHOPS",
          "Get in touch with us": "Get in touch with us",
          "First Name": "First Name",
          "Last Name": "Last Name",
          "Email (privacy policy)": "Email (privacy policy)",
          "Message": "Message",
          "Send": "Send",
          "Contact Email": "Contact Email",
          "Contact Phone": "Contact Phone",
          "Contact Address": "Contact Address",
          "Privacy Policy": "Privacy Policy",
          "About Our Agency": "About Our Agency",
          "We take care to understand your business properly – its trajectory, potential and what makes it unique": "We take care to understand your business properly – its trajectory, potential and what makes it unique",
          "Deep is a creative design agency that helps brands to reach their full potential. You'll get to meet and work directly with the entire team working on your project.": "Deep is a creative design agency that helps brands to reach their full potential. You'll get to meet and work directly with the entire team working on your project.",
          "This collaborative approach creates deeper insight, informed creativity, a lasting relationship and proven commercial success.": "This collaborative approach creates deeper insight, informed creativity, a lasting relationship and proven commercial success.",
          "Show products": "Show products",
          "Show workshops": "Show workshops",
          "Sign Up": "Sign Up",
          "Email Address": "Email Address",
          "Password": "Password",
          "I want to receive inspiration, marketing promotions and updates via email.": "I want to receive inspiration, marketing promotions and updates via email.",
          "Already have an account? Sign in": "Already have an account? Sign in",
          "Account is created!!": "Account is created!!",
          "Sign In": "Sign In",
          "Remember me": "Remember me",
          "Forgot password?": "Forgot password?",
          "Don't have an account? Sign Up": "Don't have an account? Sign Up",
          "All Products": "All Products",
          "Edit products (For Testing)": "Edit products (For Testing)",
          "Search products": "Search products",
          "Loading...": "Loading...",
          "Capacity": "Capacity",
          "Product Image": "Product Image",
          "Product Details": "Product Details",
          "View in cart": "View in cart",
          "Add to cart": "Add to cart",
          "Item Not Available": "Item Not Available",
          "We're sorry, but this item Quantity is currently not available.": "We're sorry, but this item Quantity is currently not available.",
          "Close": "Close",
          "View Cart": "View Cart",
          "All Workshops": "All Workshops",
          "Upcoming": "Upcoming",
          "Trending": "Trending",
          "Free": "Free",
          "Premium": "Premium",
          "Search workshops": "Search workshops",
          "Featured": "Featured",
          "Duration": "Duration",
          "Workshop Details": "Workshop Details",
          "View in Cart": "View in Cart",
          "Add to Cart": "Add to Cart",
          "Register": "Register",
          "Add a new product": "Add a new product",
          "Product Name": "Product Name",
          "Category": "Category",
          "Quantity": "Quantity",
          "Upload Image 1": "Upload Image 1",
          "Upload Image 2": "Upload Image 2",
          "Upload Image 3": "Upload Image 3",
          "Upload Image 4": "Upload Image 4",
          "Description": "Description",
          "Note: Your product will be reviewed before it's published. This may take up to 24 hours.": "Note: Your product will be reviewed before it's published. This may take up to 24 hours.",
          "Submit for review": "Submit for review",
          "Error uploading the product": "Error uploading the product",
          "Edit product": "Edit product",
          "Product details": "Product details",
          "Product name": "Product name",
          "Product images": "Product images",
          "Edit": "Edit",
          "Save": "Save",
          "Error fetching products:": "Error fetching products:",
          "Error updating product:": "Error updating product:",
          "Your Cart": "Your Cart",
          "Product": "Product",
          "Workshop": "Workshop",
          "Total Price:": "Total Price:",
          "Checkout": "Checkout",
          "You Don't have any Items in Cart": "You Don't have any Items in Cart",
          "You May Also Like": "You May Also Like",
          "Profile": "Profile",
          "Edit Profile": "Edit Profile",
          "Bio": "Bio",
          "Email": "Email",
          "Save Changes": "Save Changes",
          "Profile updated successfully!": "Profile updated successfully!",
          "Shipping Address": "Shipping Address",
          "Full Name": "Full Name",
          "Address": "Address",
          "City": "City",
          "Postal Code": "Postal Code",
          "Country": "Country",
          "Payment Method": "Payment Method",
          "Stripe": "Stripe",
          "PayPal": "PayPal",
          "Continue": "Continue",
          "The order is saved!": "The order is saved!",
          "Overview": "Overview",
          "Date": "Date",
          "hours": "hours",
          "participants": "participants",
          "Workshop Steps": "Workshop Steps",
          "Step": "Step",
          "Previous": "Previous",
          "Finish": "Finish",
          "Workshop finished and saved successfully!": "Workshop finished and saved successfully!",
          "Workshop image": "Workshop image",
          "My Finished Workshops": "My Finished Workshops",
          "My Registered Workshops": "My Registered Workshops",
          "No Finished workshops found.": "No Finished workshops found.",
          "No workshops found.": "No workshops found.",
          "Failed to fetch workshops": "Failed to fetch workshops",
          "Bet Elmouneh": "Bet Elmouneh",
          "Toggle menu": "Toggle menu",
          "Home": "Home",
          "Products": "Products",
          "Workshops": "Workshops",
          "My Workshops": "My Workshops",
          "About us": "About us",
          "Contact": "Contact",
          "cart": "cart",
          "add product": "add product",
          "Logout": "Logout",
          "Sign in": "Sign in",
          "Sign up": "Sign up",
          "Confirm Logout": "Confirm Logout",
          "Are you sure you want to log out?": "Are you sure you want to log out?",
          "Cancel": "Cancel",
          "Copyright": "Copyright",
          "Legal Stuff": "Legal Stuff",
          "Security": "Security",
          "Website Accessibility": "Website Accessibility",
          "Manage Cookies": "Manage Cookies",
          "All": "All",
          // Add more English translations here
        }
      },
      ar: {
        translation: {
          "welcome": "أهلاً وسهلاً",
          "Find everything you need to make the perfect meal": "ابحث عن كل ما تحتاجه لتحضير الوجبة المثالية",
          "About": "عن",
          "Search for products": "ابحث عن المنتجات",
          "Search": "بحث",
          "Daily Deals": "عروض اليوم",
          "Price": "السعر",
          "Show product": "عرض المنتج",
          "#SOME_WORKSHOPS": "#بعض_الورش",
          "Get in touch with us": "تواصل معنا",
          "First Name": "الاسم الأول",
          "Last Name": "الاسم الأخير",
          "Email (privacy policy)": "البريد الإلكتروني (سياسة الخصوصية)",
          "Message": "رسالة",
          "Send": "إرسال",
          "Contact Email": "البريد الإلكتروني للتواصل",
          "Contact Phone": "رقم الهاتف للتواصل",
          "Contact Address": "عنوان التواصل",
          "Privacy Policy": "سياسة الخصوصية",
          "About Our Agency": "عن وكالتنا",
          "We take care to understand your business properly – its trajectory, potential and what makes it unique": "نحرص على فهم عملك بشكل صحيح - مساره، إمكانياته وما يجعله فريداً",
          "Deep is a creative design agency that helps brands to reach their full potential. You'll get to meet and work directly with the entire team working on your project.": "Deep هي وكالة تصميم إبداعي تساعد العلامات التجارية على تحقيق كامل إمكاناتها. ستتمكن من مقابلة والعمل مباشرة مع الفريق الكامل الذي يعمل على مشروعك.",
          "This collaborative approach creates deeper insight, informed creativity, a lasting relationship and proven commercial success.": "تخلق هذه الطريقة التعاونية رؤى أعمق، إبداعاً مدروساً، علاقة دائمة ونجاحاً تجارياً مثبتاً.",
          "Show products": "عرض المنتجات",
          "Show workshops": "عرض الورش",
          "Sign Up": "إنشاء حساب",
          "Email Address": "البريد الإلكتروني",
          "Password": "كلمة المرور",
          "I want to receive inspiration, marketing promotions and updates via email.": "أريد تلقي الإلهام، العروض الترويجية والتحديثات عبر البريد الإلكتروني.",
          "Already have an account? Sign in": "لديك حساب بالفعل؟ تسجيل الدخول",
          "Account is created!!": "تم إنشاء الحساب!!",
          "Sign In": "تسجيل الدخول",
          "Remember me": "تذكرني",
          "Forgot password?": "نسيت كلمة المرور؟",
          "Don't have an account? Sign Up": "لا تمتلك حساب؟ تسجيل",
          "All Products": "جميع المنتجات",
          "Edit products (For Testing)": "تعديل المنتجات (للاختبار)",
          "Search products": "بحث عن المنتجات",
          "Loading...": "جاري التحميل...",
          "Capacity": "السعة",
          "Product Image": "صورة المنتج",
          "Product Details": "تفاصيل المنتج",
          "View in cart": "عرض في السلة",
          "Add to cart": "أضف إلى السلة",
          "Item Not Available": "البند غير متوفر",
          "We're sorry, but this item Quantity is currently not available.": "نعتذر، لكن الكمية الحالية لهذا البند غير متوفرة.",
          "Close": "إغلاق",
          "View Cart": "عرض السلة",
          "All Workshops": "جميع ورش العمل",
          "Upcoming": "قادم",
          "Trending": "رائج",
          "Free": "مجاني",
          "Premium": "مميز",
          "Search workshops": "ابحث عن ورش العمل",
          "Featured": "مميز",
          "Duration": "المدة",
          "Workshop Details": "تفاصيل الورشة",
          "View in Cart": "عرض في السلة",
          "Add to Cart": "أضف إلى السلة",
          "Register": "تسجيل",
          "Add a new product": "أضف منتجًا جديدًا",
          "Product Name": "اسم المنتج",
          "Category": "الفئة",
          "Quantity": "الكمية",
          "Upload Image 1": "رفع الصورة 1",
          "Upload Image 2": "رفع الصورة 2",
          "Upload Image 3": "رفع الصورة 3",
          "Upload Image 4": "رفع الصورة 4",
          "Description": "الوصف",
          "Note: Your product will be reviewed before it's published. This may take up to 24 hours.": "ملاحظة: سيتم مراجعة منتجك قبل نشره. قد يستغرق هذا ما يصل إلى 24 ساعة.",
          "Submit for review": "تقديم للمراجعة",
          "Error uploading the product": "خطأ في تحميل المنتج",
          "Edit product": "تعديل المنتج",
          "Product details": "تفاصيل المنتج",
          "Product name": "اسم المنتج",
          "Product images": "صور المنتج",
          "Edit": "تعديل",
          "Save": "حفظ",
          "Error fetching products:": "خطأ في جلب المنتجات:",
          "Error updating product:": "خطأ في تحديث المنتج:",
          "Your Cart": "سلتك",
          "Product": "منتج",
          "Workshop": "ورشة عمل",
          "Total Price:": "السعر الإجمالي:",
          "Checkout": "إتمام الطلب",
          "You Don't have any Items in Cart": "ليس لديك أي عناصر في السلة",
          "You May Also Like": "قد يعجبك أيضاً",
          "Profile": "الملف الشخصي",
          "Edit Profile": "تعديل الملف الشخصي",
          "Bio": "السيرة الذاتية",
          "Email": "البريد الإلكتروني",
          "Save Changes": "حفظ التغييرات",
          "Profile updated successfully!": "تم تحديث الملف الشخصي بنجاح!",
          "Shipping Address": "عنوان الشحن",
          "Full Name": "الاسم الكامل",
          "Address": "العنوان",
          "City": "المدينة",
          "Postal Code": "الرمز البريدي",
          "Country": "البلد",
          "Payment Method": "طريقة الدفع",
          "Stripe": "سترايب",
          "PayPal": "بايبال",
          "Continue": "استمرار",
          "The order is saved!": "تم حفظ الطلب!",
          "Overview": "نظرة عامة",
          "Date": "تاريخ",
          "hours": "ساعات",
          "participants": "المشاركين",
          "Workshop Steps": "خطوات الورشة",
          "Step": "خطوة",
          "Previous": "السابق",
          "Finish": "إنهاء",
          "Workshop finished and saved successfully!": "تم إنهاء وحفظ الورشة بنجاح!",
          "Workshop image": "صورة الورشة",
          "My Finished Workshops": "ورش العمل المنتهية الخاصة بي",
          "My Registered Workshops": "ورش العمل المسجلة الخاصة بي",
          "No Finished workshops found.": "لم يتم العثور على ورش عمل منتهية.",
          "No workshops found.": "لم يتم العثور على ورش عمل.",
          "Failed to fetch workshops": "فشل في جلب ورش العمل",
          "Bet Elmouneh": "بيت المونة",
          "Toggle menu": "تبديل القائمة",
          "Home": "الرئيسية",
          "Products": "المنتجات",
          "Workshops": "ورش العمل",
          "My Workshops": "ورش العمل الخاصة بي",
          "About us": "معلومات عنا",
          "Contact": "اتصال",
          "cart": "عربة التسوق",
          "add product": "إضافة منتج",
          "Logout": "تسجيل الخروج",
          "Sign in": "تسجيل الدخول",
          "Sign up": "انشاء حساب",
          "Confirm Logout": "تأكيد تسجيل الخروج",
          "Are you sure you want to log out?": "هل أنت متأكد أنك تريد تسجيل الخروج؟",
          "Cancel": "إلغاء",
          "Copyright": "حقوق الطبع والنشر",
          "Legal Stuff": "الأمور القانونية",
          "Security": "الأمان",
          "Website Accessibility": "إمكانية الوصول إلى الموقع",
          "Manage Cookies": "إدارة ملفات تعريف الارتباط",
          "All": "الكل"
          // Add more Arabic translations here
        }
      },
      fr: {
        translation: {
          "welcome": "Bienvenue",
          "Find everything you need to make the perfect meal": "Trouvez tout ce dont vous avez besoin pour préparer le repas parfait",
          "About": "À propos",
          "Search for products": "Rechercher des produits",
          "Search": "Rechercher",
          "Daily Deals": "Offres du jour",
          "Price": "Prix",
          "Show product": "Afficher le produit",
          "#SOME_WORKSHOPS": "#CERTAINS_ATELIERS",
          "Get in touch with us": "Contactez-nous",
          "First Name": "Prénom",
          "Last Name": "Nom",
          "Email (privacy policy)": "Email (politique de confidentialité)",
          "Message": "Message",
          "Send": "Envoyer",
          "Contact Email": "Email de contact",
          "Contact Phone": "Téléphone de contact",
          "Contact Address": "Adresse de contact",
          "Privacy Policy": "Politique de confidentialité",
          "About Our Agency": "À propos de notre agence",
          "We take care to understand your business properly – its trajectory, potential and what makes it unique": "Nous nous engageons à bien comprendre votre entreprise - sa trajectoire, son potentiel et ce qui la rend unique",
          "Deep is a creative design agency that helps brands to reach their full potential. You'll get to meet and work directly with the entire team working on your project.": "Deep est une agence de design créatif qui aide les marques à atteindre leur plein potentiel. Vous rencontrerez et travaillerez directement avec toute l'équipe travaillant sur votre projet.",
          "This collaborative approach creates deeper insight, informed creativity, a lasting relationship and proven commercial success.": "Cette approche collaborative crée une compréhension plus profonde, une créativité éclairée, une relation durable et un succès commercial prouvé.",
          "Show products": "Afficher les produits",
          "Show workshops": "Afficher les ateliers",
          "Sign Up": "S'inscrire",
          "Email Address": "Adresse email",
          "Password": "Mot de passe",
          "I want to receive inspiration, marketing promotions and updates via email.": "Je souhaite recevoir de l'inspiration, des promotions marketing et des mises à jour par email.",
          "Already have an account? Sign in": "Vous avez déjà un compte ? Connectez-vous",
          "Account is created!!": "Le compte est créé !!",
          "Sign In": "Se connecter",
          "Remember me": "Se souvenir de moi",
          "Forgot password?": "Mot de passe oublié ?",
          "Don't have an account? Sign Up": "Vous n'avez pas de compte ? Inscrivez-vous",
          "All Products": "Tous les produits",
          "Edit products (For Testing)": "Modifier les produits (pour les tests)",
          "Search products": "Rechercher des produits",
          "Loading...": "Chargement...",
          "Capacity": "Capacité",
          "Product Image": "Image du produit",
          "Product Details": "Détails du produit",
          "View in cart": "Voir dans le panier",
          "Add to cart": "Ajouter au panier",
          "Item Not Available": "Article non disponible",
          "We're sorry, but this item Quantity is currently not available.": "Désolé, mais la quantité de cet article n'est actuellement pas disponible.",
          "Close": "Fermer",
          "View Cart": "Voir le panier",
          "All Workshops": "Tous les ateliers",
          "Upcoming": "À venir",
          "Trending": "Tendance",
          "Free": "Gratuit",
          "Premium": "Premium",
          "Search workshops": "Rechercher des ateliers",
          "Featured": "En vedette",
          "Duration": "Durée",
          "Workshop Details": "Détails de l'atelier",
          "View in Cart": "Voir dans le panier",
          "Add to Cart": "Ajouter au panier",
          "Register": "S'inscrire",
          "Add a new product": "Ajouter un nouveau produit",
          "Product Name": "Nom du produit",
          "Category": "Catégorie",
          "Quantity": "Quantité",
          "Upload Image 1": "Télécharger l'image 1",
          "Upload Image 2": "Télécharger l'image 2",
          "Upload Image 3": "Télécharger l'image 3",
          "Upload Image 4": "Télécharger l'image 4",
          "Description": "Description",
          "Note: Your product will be reviewed before it's published. This may take up to 24 hours.": "Remarque : Votre produit sera examiné avant sa publication. Cela peut prendre jusqu'à 24 heures.",
          "Submit for review": "Soumettre pour révision",
          "Error uploading the product": "Erreur lors du téléchargement du produit",
          "Edit product": "Modifier le produit",
          "Product details": "Détails du produit",
          "Product name": "Nom du produit",
          "Product images": "Images du produit",
          "Edit": "Modifier",
          "Save": "Enregistrer",
          "Error fetching products:": "Erreur lors de la récupération des produits :",
          "Error updating product:": "Erreur lors de la mise à jour du produit :",
          "Your Cart": "Votre panier",
          "Product": "Produit",
          "Workshop": "Atelier",
          "Total Price:": "Prix total :",
          "Checkout": "Passer à la caisse",
          "You Don't have any Items in Cart": "Vous n'avez aucun article dans le panier",
          "You May Also Like": "Vous aimerez peut-être aussi",
          "Profile": "Profil",
          "Edit Profile": "Modifier le profil",
          "Bio": "Bio",
          "Email": "Email",
          "Save Changes": "Enregistrer les modifications",
          "Profile updated successfully!": "Profil mis à jour avec succès !",
          "Shipping Address": "Adresse de livraison",
          "Full Name": "Nom complet",
          "Address": "Adresse",
          "City": "Ville",
          "Postal Code": "Code postal",
          "Country": "Pays",
          "Payment Method": "Méthode de paiement",
          "Stripe": "Stripe",
          "PayPal": "PayPal",
          "Continue": "Continuer",
          "The order is saved!": "La commande est enregistrée !",
          "Overview": "Aperçu",
          "Date": "Date",
          "hours": "heures",
          "participants": "participants",
          "Workshop Steps": "Étapes de l'atelier",
          "Step": "Étape",
          "Previous": "Précédent",
          "Finish": "Terminer",
          "Workshop finished and saved successfully!": "Atelier terminé et enregistré avec succès !",
          "Workshop image": "Image de l'atelier",
          "My Finished Workshops": "Mes ateliers terminés",
          "My Registered Workshops": "Mes ateliers inscrits",
          "No Finished workshops found.": "Aucun atelier terminé trouvé.",
          "No workshops found.": "Aucun atelier trouvé.",
          "Failed to fetch workshops": "Échec de la récupération des ateliers",
          "Bet Elmouneh": "Bet Elmouneh",
          "Toggle menu": "Basculer le menu",
          "Home": "Accueil",
          "Products": "Produits",
          "Workshops": "Ateliers",
          "My Workshops": "Mes ateliers",
          "About us": "À propos de nous",
          "Contact": "Contact",
          "cart": "panier",
          "add product": "ajouter un produit",
          "Logout": "Se déconnecter",
          "Sign in": "Se connecter",
          "Sign up": "S'inscrire",
          "Confirm Logout": "Confirmer la déconnexion",
          "Are you sure you want to log out?": "Êtes-vous sûr de vouloir vous déconnecter ?",
          "Cancel": "Annuler",
          "Copyright": "Droits d'auteur",
          "Legal Stuff": "Mentions légales",
          "Security": "Sécurité",
          "Website Accessibility": "Accessibilité du site",
          "Manage Cookies": "Gérer les cookies",
          "All": "Tous",
        }
      }
    },
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS
    }
  });

export default i18n;
