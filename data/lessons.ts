export type Lesson = {
  id: string;
  unitId: string;
  number: number;
  title: string;
  description: string;
  durationMinutes: number;
};

export const lessons: Lesson[] = [
  // =========================
  // A1 - Unit 1
  // =========================

  {
    id: "A1-U1-L1",
    unitId: "A1-U1",
    number: 1,
    title: "¡Hola! — مرحبًا!",
    description: "تعلم التحيات الأساسية وكيف تبدأ محادثة بسيطة.",
    durationMinutes: 10,
  },
  {
    id: "A1-U1-L2",
    unitId: "A1-U1",
    number: 2,
    title: "¿Cómo estás? — كيف حالك؟",
    description: "تعلم السؤال عن الحال والردود الأساسية.",
    durationMinutes: 10,
  },
  {
    id: "A1-U1-L3",
    unitId: "A1-U1",
    number: 3,
    title: "Me llamo... — اسمي...",
    description: "تعلم تقديم نفسك وذكر اسمك.",
    durationMinutes: 12,
  },
  {
    id: "A1-U1-L4",
    unitId: "A1-U1",
    number: 4,
    title: "Mucho gusto — تشرفت بمعرفتك",
    description: "تعلم عبارات التعارف والمجاملات البسيطة.",
    durationMinutes: 10,
  },
  {
    id: "A1-U1-L5",
    unitId: "A1-U1",
    number: 5,
    title: "Repaso — مراجعة الوحدة",
    description: "مراجعة التحيات والتعارف وتقديم النفس.",
    durationMinutes: 15,
  },

  // =========================
  // A1 - Unit 2
  // =========================

  {
    id: "A1-U2-L1",
    unitId: "A1-U2",
    number: 1,
    title: "Mi familia — عائلتي",
    description: "تعلم أسماء أفراد العائلة الأساسية.",
    durationMinutes: 12,
  },
  {
    id: "A1-U2-L2",
    unitId: "A1-U2",
    number: 2,
    title: "Mis amigos — أصدقائي",
    description: "تعلم التحدث عن الأصدقاء والعلاقات الاجتماعية.",
    durationMinutes: 10,
  },
  {
    id: "A1-U2-L3",
    unitId: "A1-U2",
    number: 3,
    title: "¿Quién es? — من هذا؟",
    description: "تعلم السؤال عن الأشخاص والتعريف بهم.",
    durationMinutes: 12,
  },
  {
    id: "A1-U2-L4",
    unitId: "A1-U2",
    number: 4,
    title: "Descripción básica — الوصف الأساسي",
    description: "تعلم الصفات الأساسية لوصف الأشخاص.",
    durationMinutes: 12,
  },
  {
    id: "A1-U2-L5",
    unitId: "A1-U2",
    number: 5,
    title: "Repaso — مراجعة الوحدة",
    description: "مراجعة مفردات العائلة والأصدقاء ووصف الأشخاص.",
    durationMinutes: 15,
  },

  // =========================
  // A1 - Unit 3
  // =========================

  {
    id: "A1-U3-L1",
    unitId: "A1-U3",
    number: 1,
    title: "Mi rutina — روتيني اليومي",
    description: "تعلم الحديث عن الأنشطة اليومية.",
    durationMinutes: 12,
  },
  {
    id: "A1-U3-L2",
    unitId: "A1-U3",
    number: 2,
    title: "La hora — الوقت",
    description: "تعلم السؤال عن الوقت وذكر الساعة.",
    durationMinutes: 12,
  },
  {
    id: "A1-U3-L3",
    unitId: "A1-U3",
    number: 3,
    title: "Por la mañana — في الصباح",
    description: "تعلم التعبير عن الأنشطة الصباحية.",
    durationMinutes: 10,
  },
  {
    id: "A1-U3-L4",
    unitId: "A1-U3",
    number: 4,
    title: "Mi día — يومي",
    description: "كوّن وصفًا بسيطًا ليومك باللغة الإسبانية.",
    durationMinutes: 12,
  },
  {
    id: "A1-U3-L5",
    unitId: "A1-U3",
    number: 5,
    title: "Repaso — مراجعة الوحدة",
    description: "مراجعة الوقت والروتين اليومي.",
    durationMinutes: 15,
  },

  // =========================
  // A1 - Unit 4
  // =========================

  {
    id: "A1-U4-L1",
    unitId: "A1-U4",
    number: 1,
    title: "Mi casa — منزلي",
    description: "تعلم مفردات المنزل الأساسية.",
    durationMinutes: 12,
  },
  {
    id: "A1-U4-L2",
    unitId: "A1-U4",
    number: 2,
    title: "Las habitaciones — الغرف",
    description: "تعلم أسماء الغرف والأماكن داخل المنزل.",
    durationMinutes: 10,
  },
  {
    id: "A1-U4-L3",
    unitId: "A1-U4",
    number: 3,
    title: "Los objetos — الأشياء",
    description: "تعلم أسماء الأشياء اليومية في المنزل.",
    durationMinutes: 12,
  },
  {
    id: "A1-U4-L4",
    unitId: "A1-U4",
    number: 4,
    title: "¿Dónde está? — أين يوجد؟",
    description: "تعلم وصف مكان الأشياء بطريقة بسيطة.",
    durationMinutes: 12,
  },
  {
    id: "A1-U4-L5",
    unitId: "A1-U4",
    number: 5,
    title: "Repaso — مراجعة الوحدة",
    description: "مراجعة المنزل والغرف والأشياء.",
    durationMinutes: 15,
  },

  // =========================
  // A1 - Unit 5
  // =========================

  {
    id: "A1-U5-L1",
    unitId: "A1-U5",
    number: 1,
    title: "La comida — الطعام",
    description: "تعلم أسماء الأطعمة الأساسية.",
    durationMinutes: 12,
  },
  {
    id: "A1-U5-L2",
    unitId: "A1-U5",
    number: 2,
    title: "Las bebidas — المشروبات",
    description: "تعلم أسماء المشروبات وطلبها.",
    durationMinutes: 10,
  },
  {
    id: "A1-U5-L3",
    unitId: "A1-U5",
    number: 3,
    title: "En el restaurante — في المطعم",
    description: "تعلم العبارات الأساسية المستخدمة في المطعم.",
    durationMinutes: 15,
  },
  {
    id: "A1-U5-L4",
    unitId: "A1-U5",
    number: 4,
    title: "Me gusta / No me gusta",
    description: "تعلم التعبير عن الأشياء التي تحبها ولا تحبها.",
    durationMinutes: 12,
  },
  {
    id: "A1-U5-L5",
    unitId: "A1-U5",
    number: 5,
    title: "Repaso — مراجعة الوحدة",
    description: "مراجعة الطعام والمشروبات والمطعم.",
    durationMinutes: 15,
  },

  // =========================
  // A1 - Unit 6
  // =========================

  {
    id: "A1-U6-L1",
    unitId: "A1-U6",
    number: 1,
    title: "Mi ciudad — مدينتي",
    description: "تعلم أسماء الأماكن المهمة في المدينة.",
    durationMinutes: 12,
  },
  {
    id: "A1-U6-L2",
    unitId: "A1-U6",
    number: 2,
    title: "Los lugares — الأماكن",
    description: "تعلم مفردات الأماكن العامة.",
    durationMinutes: 12,
  },
  {
    id: "A1-U6-L3",
    unitId: "A1-U6",
    number: 3,
    title: "Direcciones — الاتجاهات",
    description: "تعلم السؤال عن الاتجاهات وفهمها.",
    durationMinutes: 15,
  },
  {
    id: "A1-U6-L4",
    unitId: "A1-U6",
    number: 4,
    title: "Transporte — المواصلات",
    description: "تعلم مفردات وسائل النقل الأساسية.",
    durationMinutes: 12,
  },
  {
    id: "A1-U6-L5",
    unitId: "A1-U6",
    number: 5,
    title: "Repaso — مراجعة الوحدة",
    description: "مراجعة المدينة والاتجاهات والمواصلات.",
    durationMinutes: 15,
  },

  // =========================
  // A1 - Unit 7
  // =========================

  {
    id: "A1-U7-L1",
    unitId: "A1-U7",
    number: 1,
    title: "De compras — التسوق",
    description: "تعلم العبارات الأساسية أثناء التسوق.",
    durationMinutes: 12,
  },
  {
    id: "A1-U7-L2",
    unitId: "A1-U7",
    number: 2,
    title: "Los precios — الأسعار",
    description: "تعلم السؤال عن الأسعار وفهمها.",
    durationMinutes: 10,
  },
  {
    id: "A1-U7-L3",
    unitId: "A1-U7",
    number: 3,
    title: "La ropa — الملابس",
    description: "تعلم أسماء الملابس الأساسية.",
    durationMinutes: 12,
  },
  {
    id: "A1-U7-L4",
    unitId: "A1-U7",
    number: 4,
    title: "Quiero comprar...",
    description: "تعلم كيفية التعبير عما تريد شراءه 
