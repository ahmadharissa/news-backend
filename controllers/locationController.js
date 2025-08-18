//models
import location from "../models/location.js";

export const getLocations = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the requested page number from query parameter, default to 1
    const pageSize = parseInt(req.query.pageSize) || 1000000000000000; // Get the requested page size from query parameter, default to 10
    const offset = (page - 1) * pageSize;
    const totalCount = await location.count(); // Get the total count of location
    const data = await location.findAll({
      offset,
      limit: pageSize,
    });
    const totalPages = Math.ceil(totalCount / pageSize);

    return res.status(200).json({
      message: "Fetched successfully.",
      data: data,
      pageInfo: {
        page: page,
        pageSize: pageSize,
        totalCount: totalCount,
        totalPages: totalPages,
      },
    });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const createLocation = async (req, res) => {
  try {
    const data = await location.create(req.body);

    return res
      .status(200)
      .json({ message: "Create successfully.", data: data });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const deleteLocation = async (req, res) => {
  let id = req.params.id;

  try {
    await location.destroy({ where: { id } });

    return res.status(200).json({ message: "Deleted successfuly" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const initialLocations = async (req, res) => {
  try {
    await location.bulkCreate([
      { nameEn: "Afghanistan", nameAr: "أفغانستان" },
      { nameEn: "Albania", nameAr: "ألبانيا" },
      { nameEn: "Algeria", nameAr: "الجزائر" },
      { nameEn: "Andorra", nameAr: "أندورا" },
      { nameEn: "Angola", nameAr: "أنغولا" },
      { nameEn: "Antigua and Barbuda", nameAr: "أنتيغوا وبربودا" },
      { nameEn: "Argentina", nameAr: "الأرجنتين" },
      { nameEn: "Armenia", nameAr: "أرمينيا" },
      { nameEn: "Australia", nameAr: "أستراليا" },
      { nameEn: "Austria", nameAr: "النمسا" },
      { nameEn: "Azerbaijan", nameAr: "أذربيجان" },
      { nameEn: "Bahamas", nameAr: "الباهاما" },
      { nameEn: "Bahrain", nameAr: "البحرين" },
      { nameEn: "Bangladesh", nameAr: "بنغلاديش" },
      { nameEn: "Barbados", nameAr: "بربادوس" },
      { nameEn: "Belarus", nameAr: "بيلاروسيا" },
      { nameEn: "Belgium", nameAr: "بلجيكا" },
      { nameEn: "Belize", nameAr: "بليز" },
      { nameEn: "Benin", nameAr: "بنين" },
      { nameEn: "Bhutan", nameAr: "بوتان" },
      { nameEn: "Bolivia", nameAr: "بوليفيا" },
      { nameEn: "Bosnia and Herzegovina", nameAr: "البوسنة والهرسك" },
      { nameEn: "Botswana", nameAr: "بوتسوانا" },
      { nameEn: "Brazil", nameAr: "البرازيل" },
      { nameEn: "Brunei", nameAr: "بروناي" },
      { nameEn: "Bulgaria", nameAr: "بلغاريا" },
      { nameEn: "Burkina Faso", nameAr: "بوركينا فاسو" },
      { nameEn: "Burundi", nameAr: "بوروندي" },
      { nameEn: "Cabo Verde", nameAr: "الرأس الأخضر" },
      { nameEn: "Cambodia", nameAr: "كمبوديا" },
      { nameEn: "Cameroon", nameAr: "الكاميرون" },
      { nameEn: "Canada", nameAr: "كندا" },
      { nameEn: "Central African Republic", nameAr: "جمهورية أفريقيا الوسطى" },
      { nameEn: "Chad", nameAr: "تشاد" },
      { nameEn: "Chile", nameAr: "تشيلي" },
      { nameEn: "China", nameAr: "الصين" },
      { nameEn: "Colombia", nameAr: "كولومبيا" },
      { nameEn: "Comoros", nameAr: "جزر القمر" },
      { nameEn: "Congo (Congo-Brazzaville)", nameAr: "الكونغو" },
      { nameEn: "Costa Rica", nameAr: "كوستاريكا" },
      { nameEn: "Croatia", nameAr: "كرواتيا" },
      { nameEn: "Cuba", nameAr: "كوبا" },
      { nameEn: "Cyprus", nameAr: "قبرص" },
      { nameEn: "Czech Republic", nameAr: "جمهورية التشيك" },
      {
        nameEn: "Democratic Republic of the Congo",
        nameAr: "جمهورية الكونغو الديمقراطية",
      },
      { nameEn: "Denmark", nameAr: "الدنمارك" },
      { nameEn: "Djibouti", nameAr: "جيبوتي" },
      { nameEn: "Dominica", nameAr: "دومينيكا" },
      { nameEn: "Dominican Republic", nameAr: "جمهورية الدومينيكان" },
      { nameEn: "Ecuador", nameAr: "الإكوادور" },
      { nameEn: "Egypt", nameAr: "مصر" },
      { nameEn: "El Salvador", nameAr: "السلفادور" },
      { nameEn: "Equatorial Guinea", nameAr: "غينيا الاستوائية" },
      { nameEn: "Eritrea", nameAr: "إريتريا" },
      { nameEn: "Estonia", nameAr: "إستونيا" },
      { nameEn: "Eswatini", nameAr: "إسواتيني" },
      { nameEn: "Ethiopia", nameAr: "إثيوبيا" },
      { nameEn: "Fiji", nameAr: "فيجي" },
      { nameEn: "Finland", nameAr: "فنلندا" },
      { nameEn: "France", nameAr: "فرنسا" },
      { nameEn: "Gabon", nameAr: "الغابون" },
      { nameEn: "Gambia", nameAr: "غامبيا" },
      { nameEn: "Georgia", nameAr: "جورجيا" },
      { nameEn: "Germany", nameAr: "ألمانيا" },
      { nameEn: "Ghana", nameAr: "غانا" },
      { nameEn: "Greece", nameAr: "اليونان" },
      { nameEn: "Grenada", nameAr: "غرينادا" },
      { nameEn: "Guatemala", nameAr: "غواتيمالا" },
      { nameEn: "Guinea", nameAr: "غينيا" },
      { nameEn: "Guinea-Bissau", nameAr: "غينيا بيساو" },
      { nameEn: "Guyana", nameAr: "غيانا" },
      { nameEn: "Haiti", nameAr: "هايتي" },
      { nameEn: "Honduras", nameAr: "هندوراس" },
      { nameEn: "Hungary", nameAr: "المجر" },
      { nameEn: "Iceland", nameAr: "آيسلندا" },
      { nameEn: "India", nameAr: "الهند" },
      { nameEn: "Indonesia", nameAr: "إندونيسيا" },
      { nameEn: "Iran", nameAr: "إيران" },
      { nameEn: "Iraq", nameAr: "العراق" },
      { nameEn: "Ireland", nameAr: "أيرلندا" },
      { nameEn: "Israel", nameAr: "إسرائيل" },
      { nameEn: "Italy", nameAr: "إيطاليا" },
      { nameEn: "Jamaica", nameAr: "جامايكا" },
      { nameEn: "Japan", nameAr: "اليابان" },
      { nameEn: "Jordan", nameAr: "الأردن" },
      { nameEn: "Kazakhstan", nameAr: "كازاخستان" },
      { nameEn: "Kenya", nameAr: "كينيا" },
      { nameEn: "Kiribati", nameAr: "كيريباس" },
      { nameEn: "Kuwait", nameAr: "الكويت" },
      { nameEn: "Kyrgyzstan", nameAr: "قيرغيزستان" },
      { nameEn: "Laos", nameAr: "لاوس" },
      { nameEn: "Latvia", nameAr: "لاتفيا" },
      { nameEn: "Lebanon", nameAr: "لبنان" },
      { nameEn: "Lesotho", nameAr: "ليسوتو" },
      { nameEn: "Liberia", nameAr: "ليبيريا" },
      { nameEn: "Libya", nameAr: "ليبيا" },

      { nameEn: "Liechtenstein", nameAr: "ليختنشتاين" },
      { nameEn: "Lithuania", nameAr: "ليتوانيا" },
      { nameEn: "Luxembourg", nameAr: "لوكسمبورغ" },
      { nameEn: "Madagascar", nameAr: "مدغشقر" },
      { nameEn: "Malawi", nameAr: "مالاوي" },
      { nameEn: "Malaysia", nameAr: "ماليزيا" },
      { nameEn: "Maldives", nameAr: "المالديف" },
      { nameEn: "Mali", nameAr: "مالي" },
      { nameEn: "Malta", nameAr: "مالطا" },
      { nameEn: "Marshall Islands", nameAr: "جزر مارشال" },
      { nameEn: "Mauritania", nameAr: "موريتانيا" },
      { nameEn: "Mauritius", nameAr: "موريشيوس" },
      { nameEn: "Mexico", nameAr: "المكسيك" },
      { nameEn: "Micronesia", nameAr: "ميكرونيزيا" },
      { nameEn: "Moldova", nameAr: "مولدوفا" },
      { nameEn: "Monaco", nameAr: "موناكو" },
      { nameEn: "Mongolia", nameAr: "منغوليا" },
      { nameEn: "Montenegro", nameAr: "الجبل الأسود" },
      { nameEn: "Morocco", nameAr: "المغرب" },
      { nameEn: "Mozambique", nameAr: "موزمبيق" },
      { nameEn: "Myanmar (Burma)", nameAr: "ميانمار" },
      { nameEn: "Namibia", nameAr: "ناميبيا" },
      { nameEn: "Nauru", nameAr: "ناورو" },
      { nameEn: "Nepal", nameAr: "نيبال" },
      { nameEn: "Netherlands", nameAr: "هولندا" },
      { nameEn: "New Zealand", nameAr: "نيوزيلندا" },
      { nameEn: "Nicaragua", nameAr: "نيكاراغوا" },
      { nameEn: "Niger", nameAr: "النيجر" },
      { nameEn: "Nigeria", nameAr: "نيجيريا" },
      { nameEn: "North Korea", nameAr: "كوريا الشمالية" },
      { nameEn: "North Macedonia", nameAr: "مقدونيا الشمالية" },
      { nameEn: "Norway", nameAr: "النرويج" },
      { nameEn: "Oman", nameAr: "عمان" },
      { nameEn: "Pakistan", nameAr: "باكستان" },
      { nameEn: "Palau", nameAr: "بالاو" },
      { nameEn: "Palestine", nameAr: "فلسطين" },
      { nameEn: "Panama", nameAr: "بنما" },
      { nameEn: "Papua New Guinea", nameAr: "بابوا غينيا الجديدة" },
      { nameEn: "Paraguay", nameAr: "باراغواي" },
      { nameEn: "Peru", nameAr: "بيرو" },
      { nameEn: "Philippines", nameAr: "الفلبين" },
      { nameEn: "Poland", nameAr: "بولندا" },
      { nameEn: "Portugal", nameAr: "البرتغال" },
      { nameEn: "Qatar", nameAr: "قطر" },
      { nameEn: "Romania", nameAr: "رومانيا" },
      { nameEn: "Russia", nameAr: "روسيا" },
      { nameEn: "Rwanda", nameAr: "رواندا" },
      { nameEn: "Saint Kitts and Nevis", nameAr: "سانت كيتس ونيفيس" },
      { nameEn: "Saint Lucia", nameAr: "سانت لوسيا" },
      {
        nameEn: "Saint Vincent and the Grenadines",
        nameAr: "سانت فنسنت والغرينادين",
      },
      { nameEn: "Samoa", nameAr: "ساموا" },
      { nameEn: "San Marino", nameAr: "سان مارينو" },
      { nameEn: "Sao Tome and Principe", nameAr: "ساو تومي وبرينسيبي" },
      { nameEn: "Saudi Arabia", nameAr: "المملكة العربية السعودية" },
      { nameEn: "Senegal", nameAr: "السنغال" },
      { nameEn: "Serbia", nameAr: "صربيا" },
      { nameEn: "Seychelles", nameAr: "سيشل" },
      { nameEn: "Sierra Leone", nameAr: "سيراليون" },
      { nameEn: "Singapore", nameAr: "سنغافورة" },
      { nameEn: "Slovakia", nameAr: "سلوفاكيا" },
      { nameEn: "Slovenia", nameAr: "سلوفينيا" },
      { nameEn: "Solomon Islands", nameAr: "جزر سليمان" },
      { nameEn: "Somalia", nameAr: "الصومال" },
      { nameEn: "South Africa", nameAr: "جنوب أفريقيا" },
      { nameEn: "South Korea", nameAr: "كوريا الجنوبية" },
      { nameEn: "South Sudan", nameAr: "جنوب السودان" },
      { nameEn: "Spain", nameAr: "إسبانيا" },
      { nameEn: "Sri Lanka", nameAr: "سريلانكا" },
      { nameEn: "Sudan", nameAr: "السودان" },
      { nameEn: "Suriname", nameAr: "سورينام" },
      { nameEn: "Sweden", nameAr: "السويد" },
      { nameEn: "Switzerland", nameAr: "سويسرا" },
      { nameEn: "Syria", nameAr: "سوريا" },
      { nameEn: "Taiwan", nameAr: "تايوان" },
      { nameEn: "Tajikistan", nameAr: "طاجيكستان" },
      { nameEn: "Tanzania", nameAr: "تنزانيا" },
      { nameEn: "Thailand", nameAr: "تايلاند" },
      { nameEn: "Timor-Leste", nameAr: "تيمور الشرقية" },
      { nameEn: "Togo", nameAr: "توغو" },
      { nameEn: "Tonga", nameAr: "تونغا" },
      { nameEn: "Trinidad and Tobago", nameAr: "ترينيداد وتوباغو" },
      { nameEn: "Tunisia", nameAr: "تونس" },
      { nameEn: "Turkey", nameAr: "تركيا" },
      { nameEn: "Turkmenistan", nameAr: "تركمانستان" },
      { nameEn: "Tuvalu", nameAr: "توفالو" },
      { nameEn: "Uganda", nameAr: "أوغندا" },
      { nameEn: "Ukraine", nameAr: "أوكرانيا" },
      { nameEn: "United Arab Emirates", nameAr: "الإمارات العربية المتحدة" },
      { nameEn: "United Kingdom", nameAr: "المملكة المتحدة" },
      {
        nameEn: "United States of America",
        nameAr: "الولايات المتحدة الأمريكية",
      },
      { nameEn: "Uruguay", nameAr: "أوروغواي" },
      { nameEn: "Uzbekistan", nameAr: "أوزبكستان" },
      { nameEn: "Vanuatu", nameAr: "فانواتو" },
      { nameEn: "Vatican City", nameAr: "الفاتيكان" },
      { nameEn: "Venezuela", nameAr: "فنزويلا" },
      { nameEn: "Vietnam", nameAr: "فيتنام" },
      { nameEn: "Yemen", nameAr: "اليمن" },
      { nameEn: "Zambia", nameAr: "زامبيا" },
      { nameEn: "Zimbabwe", nameAr: "زيمبابوي" },
    ]);

    return res.status(200).json({ message: "Locations added successfully!" });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
