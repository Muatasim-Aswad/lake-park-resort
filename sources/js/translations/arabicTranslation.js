import { checkVariables } from '../utils/checkVariables.js';
//arabic translation - start:
export const arabicTranslation = () => {
  //object for translation text, key must be an exact match to data-txt attribute in html
  const ar = {
    lang: 'ar',
    dir: 'rtl',
    title: 'منتجع ليك بارك',
    home: 'الرئيسية',
    book: 'الحجز',
    explore: 'استكشف',
    reach: 'التواصل',
    home0c10h: 'مرحبا بكم في منتجع ليك بارك',
    home0c10p:
      'قم بحجز اقامتك في إحدى فللنا وانغمس في الطبيعة الخلابة بجوار بحيرة صبانجة في تركيا.',
    home0c10b: 'سارع بالحجز',
    home0c20h: 'إقامة فاخرة',
    home0c20p:
      'يقدم منتجعنا مزيجًا فريدًا من الهدوء والراحة والفخامة، مما يجعله الملاذ المثالي لمن يبحثون عن استراحة من صخب وضجيج الحياة الحضرية. تم تصميم أماكن الإقامة لدينا وأنتم في بالنا، حيث توفر كل غرفة إطلالة بانورامية على البحيرة، لضمان استيقاظكم على مشهد المياه اللامعة كل صباح. مع وسائل الراحة الحديثة والأثاث الفاخر، نضمن لكم إقامة مريحة بقدر ما هي لا تُنسى.',
    home0c20b: 'تعرف على المنتجع',
    home0c30h: 'جمال لا مثيل له',
    home0c30p:
      'يقع منتجعنا بالقرب من شلالات معشوقية وعلى ضفاف بحيرة صبنجا الخلابة، حيث يوفر مناظر طبيعية أخاذة ومجموعة واسعة من الأنشطة الترفيهية. منتجع بارك ليك هو وجهتك المثالية.',
    home0c30b: 'تواصل معنا',
    home0c40h: 'إقامة لا تُنسى في انتظاركم',
    home0c40p:
      'في منتجع ليك بارك، نحن نسعى جاهدين لتوفير إقامة لا تُنسى لضيوفنا. مع مرافقنا المتميزة، الخدمة الاستثنائية، والموقع الخلاب، نعدكم بتجربة فريدة ستظل ذاكرتها مدى الحياة. احجزوا إقامتكم معنا اليوم وتمتعوا بأفضل ما في سبانجا سكاريا.',
    home0c40b: 'قم بالحجز الآن',
    check0in: 'الوصول',
    check0out: 'المغادرة',
    villas0number: 'عدد الفلل ',
    search0result0p1:
      '<strong>أخبار رائعة!</strong> لقد وجدنا <span id="available-villas">3</span> فيلات متاحة لإقامتك!<br>إجازتك على بُعد نقرة واحدة. إليك نظرة سريعة على تفاصيل الأسعار والحجز:',
    total0days: 'عدد الأيام',
    daily0price: 'السعر اليومي لكل فيلا',
    total0price: 'إجمالي السعر',
    search0result0p2:
      ' انتظر، هناك المزيد! نحن متحمسون لنقدم لك <span>خصم خاص.</span> هذه صفقة لا تريد أن تفوتها!',
    discount0price: 'إجمالي السعر بعد الخصم',
    search0result0p3:
      'لا تنتظر طويلاً، هذه الفيلات لن تكون متاحة لفترة طويلة. احصل على هذا العرض واملأ نموذج الحجز الآن لتأمين إقامتك. نحن نتطلع إلى الترحيب بك!',
    search0result0b1: 'أكمل الحجز الآن',
    article10h: 'منتجع ليك بارك –<br>مهربك الهادئ في سبانجا سكاريا',
    article10p:
      '<br>يقع منتجع ليك بارك في قلب سبانجا سكاريا، وهو جوهرة مخفية تقدم ملاذًا حصريًا بعيدًا عن صخب الحياة اليومية. يضم منتجعنا 12 فيلا مؤثثة بأناقة، كل منها مزودة بـ <strong>مسبح خاص.</strong> كل فيلا مجهزة أيضًا بـ <strong>4 غرف وحمامين</strong>، مما يضمن تجربة هادئة وحميمة لجميع ضيوفنا.<br><br><em>الفخامة تلتقي بالطبيعة</em><br>في منتجع ليك بارك، نؤمن بتقديم تجربة تجمع بين راحة الفخامة وهدوء الطبيعة. تم تصميم فيلاتنا لتندمج بسلاسة مع المناظر الطبيعية المحيطة، مما يوفر إطلالات خلابة وبيئة هادئة. سواء كنت ترغب في الاسترخاء بجانب المسبح أو استكشاف جمال الطبيعة في سبانجا، فإن منتجعنا هو القاعدة المثالية لجميع مغامراتك.<br><br><em>خدمات مصممة لراحتك</em><br>كل فيلا في <abbr title="Lake Park Resort">LPR</abbr> مجهزة بوسائل الراحة الحديثة والخدمات لتلبية جميع احتياجاتك. من خدمة التنظيف اليومية إلى خدمة الغرف، نضمن أن تكون إقامتك مريحة وخالية من المتاعب قدر الإمكان. فريقنا المخصص دائمًا على استعداد لتقديم خدمة شخصية، سواء كان ذلك لترتيب عشاء خاص أو إرشادك إلى المعالم المحلية.',
    article2h: 'اكتشف سبانجا كما لم ترها من قبل',
    article2p:
      'يقع منتجع ليك بارك في مكان مثالي بالقرب من حديقة بحيرة سبانجا وحديقة الحياة البرية أورمانيا، مما يتيح للضيوف فرصة الانغماس في روعة المنطقة الطبيعية. يمكنك القيام بنزهة هادئة بجانب البحيرة، أو قضاء اليوم في استكشاف حديقة الحياة البرية – الخيار لك.<br><br><em>منزلك بعيدًا عن المنزل</em><br>نفهم أن الخصوصية والراحة هما الأساس عند قضاء العطلة. لهذا السبب تم تصميم فيلاتنا لتوفر لك شعور المنزل بعيدًا عن المنزل، مع الفخامة الإضافية لخدمات الفنادق. يوفر نظام الإيجار اليومي المرونة لجعل منتجع ليك بارك ملكًا لك، حتى لو كان ليوم واحد فقط.<br><br><em>انضم إلينا لإقامة لا تُنسى</em><br>يدعوك منتجع ليك بارك لتجربة أقصى درجات الاسترخاء والراحة. احجز فيلتك اليوم واكتشف لماذا يعود ضيوفنا عامًا بعد عام للحصول على إجازتهم المثالية. نتطلع إلى الترحيب بك في مهربك المفضل الجديد. ',
    reach0h1: 'تواصل بنا في منتجع ليك بارك',
    reach0p1:
      'منتجع ليك بارك هو مهربك المثالي المحاط بالطبيعة. نحن موجودون بشكل مريح في رستيمباسا، شارع أديامان رقم 33/1، سبانجا، سكاريا، تركيا.',
    reach0h22: 'بالسيارة &#128663',
    reach0p2:
      'منتجعنا متصل جيدًا بالطرق. يمكنك استخدام أي خدمة GPS مشهورة للوصول إلى موقعنا. فقط اكتب “منتجع ليك بارك، سبانجا” وستكون في طريقك!',
    reach0h23: 'بالقطار &#128646',
    reach0p3:
      'أقرب محطة سكة حديد هي <span><a href="https://railturkey.org/travel/stations/arifiye/" target="_blank">أريفية</a></span>، التي تبعد 6 كم فقط عن المنتجع. من هناك، يمكنك أخذ سيارة أجرة أو استخدام خدمات النقل المحلية للوصول إلينا.',
    reach0h24: 'بالطائرة &#9992',
    reach0p4:
      'أقرب مطار هو <span><a href="https://www.sabihagokcen.aero/passengers-and-visitors/transport-and-parking/transportation/easy-access-to-sakarya" target="_blank">مطار صبيحة كوكجن الدولي - SAW</a></span>. يبعد حوالي 90 دقيقة بالسيارة من المنتجع. تتوفر سيارات الأجرة وخدمات النقل المكوكية من المطار.',
    reach0h25: 'الخريطة &#128506',
    reach0p5:
      'لمساعدتك في العثور علينا بسهولة، قمنا بتضمين مقتطف من الخريطة أدناه. سيعطيك هذا فهمًا مرئيًا لموقعنا والمنطقة المحيطة.',
    form0h: 'نموذج الاتصال',
    form0p:
      'إذا كان لديك أي أسئلة أو تحتاج إلى مساعدة في تخطيط رحلتك، لا تتردد في ملء نموذج الاتصال أدناه. فريقنا دائمًا هنا لمساعدتك!',
    form0l1: '<abbr title="required" >* </abbr> الاسم الأول',
    form0l2: 'الاسم الأخير',
    form0l3: '<abbr title="required" >* </abbr> البريد الإلكتروني',
    form0l4: 'رقم الهاتف',
    form0l5: '<abbr title="required" >* </abbr> طريقة الاتصال المفضلة',
    form0l6: 'البريد الإلكتروني',
    form0l7: 'الهاتف',
    form0l8: 'الموضوع',
    form0l9: '<abbr title="required" >* </abbr> الرسالة',
    form0b: 'إرسال',
    notice0p1: '© 2024 MTSM. جميع الحقوق محفوظة.',
    notice0p2: 'الموقع تجريبي لأغراض العرض فقط.',
  };

  const enButton = document.querySelector(
    '#display-language ul',
  ).firstElementChild;
  const arButton = document.querySelector(
    '#display-language ul',
  ).lastElementChild;
  checkVariables('chang language', enButton, arButton);

  // (L local || S session) s-storage
  //LsLang is used to determine that the user preferred Arabic lang, otherwise English
  const LsLang = localStorage.getItem('lang')
    ? localStorage.getItem('lang')
    : null;
  //SslangChangedManually is used to know that the session user preferred to manually change the lang
  const SslangChangedManually = sessionStorage.getItem('langChangedManually')
    ? sessionStorage.getItem('langChangedManually')
    : false;

  //change LsLang to Ar if it's the browser default, and the session user did not manually change the lang
  (() => {
    const userDefaultLang = navigator.language || navigator.userLanguage;

    if (
      userDefaultLang &&
      userDefaultLang.includes('ar') &&
      !SslangChangedManually
    ) {
      localStorage.setItem('lang', 'ar');
    }
  })();

  //change LsLang to Ar
  arButton.addEventListener('click', () => {
    localStorage.setItem('lang', 'ar');
    sessionStorage.setItem('langChangedManually', 'true');
    location.reload();
  });

  //turn to Ar and style buttons, if the LsLang = 'ar',
  (() => {
    if (LsLang && LsLang === 'ar') {
      arButton.classList.add('current');
      enButton.classList.remove('current');

      const keys = Object.keys(ar);

      keys.forEach((key) => {
        const matchElements = document.querySelectorAll(`[data-txt=${key}`);
        matchElements.forEach((matchElement) => {
          if (matchElement) matchElement.innerHTML = ar[key];
        });
      });

      document.documentElement.lang = ar.lang;
      document.documentElement.dir = ar.dir;
    }
  })();

  // turn to En by removing LSLang, and reloading, style buttons
  enButton.addEventListener('click', (event) => {
    localStorage.removeItem('lang');
    arButton.classList.add('current');
    enButton.classList.remove('current');
    sessionStorage.setItem('langChangedManually', 'true');
    location.reload();
  });
};

/*end arabic translation*/
