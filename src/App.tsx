/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronLeft, 
  Star, 
  ShieldCheck, 
  Zap, 
  HeartPulse, 
  Sparkles,
  Stethoscope,
  Smile,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'آراء المرضى', href: '#testimonials' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 blue-gradient rounded-lg flex items-center justify-center shadow-lg">
            <Smile className="text-white" size={24} />
          </div>
          <span className={`text-xl font-bold ${isScrolled ? 'text-medical-blue' : 'text-white'}`}>الابتسامة الراقية</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors hover:text-gold-accent ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-medical-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} className={isScrolled ? 'text-medical-blue' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-medical-blue' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 font-medium text-lg hover:text-medical-blue"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-medical-blue/80 to-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-right w-full">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            الابتسامة الراقية… <br />
            <span className="text-gold-accent">حيث تبدأ ثقتك بنفسك</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl md:ml-0 md:mr-auto">
            نقدم لكم أرقى خدمات طب الأسنان بأحدث التقنيات العالمية، لضمان راحتكم وجمال ابتسامتكم في بيئة طبية فاخرة ومعقمة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-4 blue-gradient text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              تواصل معنا الآن
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              اكتشف خدماتنا
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const features = [
    { icon: <ShieldCheck className="text-gold-accent" />, title: "أعلى معايير التعقيم", desc: "نلتزم ببروتوكولات تعقيم صارمة لضمان سلامة مرضانا." },
    { icon: <Zap className="text-gold-accent" />, title: "أحدث الأجهزة", desc: "نستخدم تقنيات رقمية متطورة لتشخيص وعلاج دقيق." },
    { icon: <HeartPulse className="text-gold-accent" />, title: "راحة المريض أولاً", desc: "بيئة هادئة ومريحة تجعل زيارتك للعيادة تجربة إيجابية." },
    { icon: <Star className="text-gold-accent" />, title: "خبرة وجودة", desc: "فريق طبي متخصص بخبرات واسعة في كافة مجالات طب الأسنان." },
  ];

  return (
    <section id="about" className="py-24 bg-medical-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2070" 
                alt="Dental Professional" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <div className="text-medical-blue font-bold text-4xl mb-1">15+</div>
              <div className="text-slate-500 font-medium">عاماً من الخبرة</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-accent font-bold tracking-widest uppercase text-sm mb-4 block">من نحن</span>
            <h2 className="text-3xl md:text-5xl font-bold text-medical-blue mb-6">عيادة الابتسامة الراقية</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              نحن في عيادة الابتسامة الراقية نؤمن بأن الابتسامة هي مفتاح الثقة. نسعى جاهدين لتقديم رعاية صحية متكاملة لأسنانكم باستخدام أحدث ما توصل إليه العلم في مجال طب وجراحة وتجميل الأسنان.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{f.title}</h4>
                    <p className="text-slate-500 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { 
      icon: <Sparkles size={40} className="text-medical-blue" />, 
      title: "تجميل الأسنان", 
      desc: "ابتسامة هوليوود، القشور الخزفية (الفينير)، وتصميم الابتسامة الرقمي." 
    },
    { 
      icon: <Stethoscope size={40} className="text-medical-blue" />, 
      title: "تقويم الأسنان", 
      desc: "تقويم الأسنان الشفاف والمعدني لتصحيح اصطفاف الأسنان لجميع الأعمار." 
    },
    { 
      icon: <HeartPulse size={40} className="text-medical-blue" />, 
      title: "زراعة الأسنان", 
      desc: "تعويض الأسنان المفقودة بأحدث تقنيات الزراعة الفورية وبدون ألم." 
    },
    { 
      icon: <Smile size={40} className="text-medical-blue" />, 
      title: "تنظيف وتبييض الأسنان", 
      desc: "إزالة الترسبات وتبييض الأسنان بالليزر للحصول على إشراقة فورية." 
    },
    { 
      icon: <ShieldCheck size={40} className="text-medical-blue" />, 
      title: "علاج الجذور", 
      desc: "علاج أعصاب الأسنان بدقة عالية باستخدام أحدث أجهزة الروتاري." 
    },
    { 
      icon: <Zap size={40} className="text-medical-blue" />, 
      title: "طب أسنان الأطفال", 
      desc: "رعاية خاصة وحنونة لأسنان أطفالكم في بيئة محببة وغير مخيفة." 
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-gold-accent font-bold tracking-widest uppercase text-sm mb-4 block">خدماتنا المتميزة</span>
        <h2 className="text-3xl md:text-5xl font-bold text-medical-blue mb-16">نعتني بابتسامتك بكل احترافية</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all text-center group"
            >
              <div className="w-20 h-20 bg-medical-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:blue-gradient group-hover:text-white transition-colors">
                {React.cloneElement(s.icon as React.ReactElement, { className: "group-hover:text-white transition-colors" })}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "أحمد منصور", text: "تجربة رائعة جداً، العيادة قمة في النظافة والتعامل راقي جداً. النتيجة كانت مذهلة في تبييض الأسنان.", rating: 5 },
    { name: "سارة العتيبي", text: "كنت أخشى طبيب الأسنان دائماً، لكن في الابتسامة الراقية شعرت براحة تامة. شكراً للطاقم الطبي المتميز.", rating: 5 },
    { name: "محمد خالد", text: "أفضل عيادة لزراعة الأسنان، دقة في المواعيد واحترافية عالية في العمل. أنصح بها الجميع.", rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-accent font-bold tracking-widest uppercase text-sm mb-4 block">آراء المرضى</span>
          <h2 className="text-3xl md:text-5xl font-bold text-medical-blue">ثقة مرضانا هي سر نجاحنا</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, i) => <Star key={i} size={18} className="fill-gold-accent text-gold-accent" />)}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">"{r.text}"</p>
              <div className="font-bold text-medical-blue">{r.name}</div>
              <div className="absolute -top-4 -right-4 w-12 h-12 blue-gradient rounded-full flex items-center justify-center text-white text-2xl font-serif">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-gold-accent font-bold tracking-widest uppercase text-sm mb-4 block">تواصل معنا</span>
            <h2 className="text-3xl md:text-5xl font-bold text-medical-blue mb-8">نحن هنا للإجابة على استفساراتكم</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-medical-light rounded-2xl flex items-center justify-center text-medical-blue shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">رقم الهاتف</h4>
                  <p className="text-slate-500 text-lg" dir="ltr">+966 12 345 6789</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-medical-light rounded-2xl flex items-center justify-center text-medical-blue shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">البريد الإلكتروني</h4>
                  <p className="text-slate-500 text-lg">info@elegant-smile.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-medical-light rounded-2xl flex items-center justify-center text-medical-blue shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">العنوان</h4>
                  <p className="text-slate-500 text-lg">شارع التحلية، حي الروضة، جدة، المملكة العربية السعودية</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-medical-light rounded-2xl flex items-center justify-center text-medical-blue shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">أوقات العمل</h4>
                  <p className="text-slate-500">السبت - الخميس: 9:00 صباحاً - 9:00 مساءً</p>
                  <p className="text-slate-500 font-bold text-medical-blue mt-1">الجمعة: مغلق</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.2428749705!2d39.10311918641499!3d21.54987302853746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xee059da5665c497f!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1708680000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 blue-gradient rounded-xl flex items-center justify-center shadow-lg">
              <Smile className="text-white" size={28} />
            </div>
            <div className="text-2xl font-bold">الابتسامة الراقية</div>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold-accent transition-colors">فيسبوك</a>
            <a href="#" className="hover:text-gold-accent transition-colors">انستغرام</a>
            <a href="#" className="hover:text-gold-accent transition-colors">تويتر</a>
          </div>
        </div>
        
        <div className="text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} عيادة الابتسامة الراقية لطب الأسنان. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
