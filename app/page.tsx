'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Ký hiệu SVG kỹ thuật
const Icons = {
  Academy: () => (
    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Tech: () => (
    <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Link: () => (
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'DỰ ÁN', href: '#trang-chu' },
    { name: 'NĂNG LỰC', href: '#kinh-nghiem' },
    { name: 'BÀI TẬP', href: '#bai-tap' },
    { name: 'TỔNG KẾT', href: '#tong-ket' },
    { name: 'KẾT NỐI', href: '#lien-he' },
  ];

  const exercises = [
    { label: 'BT 01', title: 'Máy tính & Thiết bị ngoại vi', desc: 'Thao tác tệp tin, quản lý hệ thống máy tính và các thiết bị phần cứng cơ bản.' },
    { label: 'BT 02', title: 'Sử dụng AI có trách nhiệm', desc: 'Nghiên cứu liêm chính học thuật và ứng dụng AI hỗ trợ mô phỏng Định luật Gauss trong Python.' },
    { label: 'BT 03', title: 'Sáng tạo Nội dung số', desc: 'Kết hợp Gemini, DALL-E 3 và Canva thiết kế báo cáo kỹ thuật về hệ thống lưu trữ năng lượng (Lithium-ion).' },
    { label: 'BT 04', title: 'Giao tiếp & Hợp tác số', desc: 'Triển khai dự án nhóm: Ứng dụng công nghệ AI và Computer Vision trong quản lý giao thông thông minh.' },
    { label: 'BT 05', title: 'Kỹ năng Viết Prompt', desc: 'Áp dụng Role-prompting và Chain-of-thought để tối ưu hóa quá trình học thuật toán và lập trình Python.' },
    { label: 'BT 06', title: 'Đánh giá Thông tin Học thuật', desc: 'Tìm kiếm, phân loại và đánh giá độ tin cậy của 12 tài liệu nghiên cứu Python trong phân tích Big Data.' },
  ];

  // THÊM CHỮ ": any" ĐỂ ÉP KIỂU VÀ XÓA LỖI ĐỎ CỦA TYPESCRIPT
  const fadeUpVariant: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen bg-[#050509] text-slate-300 font-mono overflow-hidden relative selection:bg-amber-400 selection:text-black">
      
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        } as React.CSSProperties} 
      ></div>

      {/* ========================================================
          1. NAVBAR 
         ======================================================== */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-[#050509]/90 backdrop-blur-sm border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-black text-xl tracking-tighter text-white">
              [ <span className="text-amber-400">DAI</span>.TRAN ]
            </div>
            
            <div className="hidden md:flex space-x-1">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-all uppercase tracking-widest">
                  {item.name}
                </a>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white bg-slate-800 rounded-sm">
              {isMenuOpen ? '[ X ]' : '[ = ]'}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a12] border-b border-slate-800 p-2">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 font-bold text-slate-300 text-sm tracking-widest">
                - {item.name}
              </a>
            ))}
          </div>
        )}
      </motion.nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            2. HERO SECTION
           ======================================================== */}
        <motion.section 
          id="trang-chu" 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="pt-32 pb-20 md:pt-40 md:pb-32 grid md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-[#0a0a12] border border-slate-800 p-10 flex flex-col justify-end">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">// TRẦN TRỌNG ĐẠI</div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-white mb-6">
              NĂNG LƯỢNG <br />
              <span className="text-cyan-400">KIẾN TẠO.</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="bg-[#0a0a12] border border-slate-800 p-8 flex flex-col justify-between">
            <div className="w-10 h-10 border-t-2 border-l-2 border-slate-700"></div>
            <p className="text-slate-400 font-medium leading-relaxed text-sm">
              Sinh viên ngành Kỹ thuật Năng lượng tại UET. Tập trung nghiên cứu các giải pháp bền vững, tối ưu hóa lưới điện thông minh và ứng dụng AI trong học thuật.
            </p>
          </motion.div>
        </motion.section>

        {/* ========================================================
            3. KINH NGHIỆM & KỸ NĂNG
           ======================================================== */}
        <motion.section 
          id="kinh-nghiem"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="scroll-mt-24 py-16 grid md:grid-cols-2 gap-6 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-800 hidden md:block"></div>
          
          <motion.div variants={fadeUpVariant} className="group relative bg-[#0a0a12] border border-slate-800 p-10 hover:border-cyan-400 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <Icons.Academy />
              <h3 className="text-2xl font-bold text-white tracking-tight">Học thuật (VNU-UET)</h3>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed">
              Đang xây dựng nền tảng vững chắc với các môn Giải tích, Vật lý và Mạch điện tử. Đặt mục tiêu GPA ổn định và rèn luyện tư duy logic chuẩn kỹ sư.
            </p>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="group relative bg-[#0a0a12] border border-slate-800 p-10 hover:border-amber-400 transition-colors md:mt-16">
            <div className="flex items-center gap-4 mb-8">
              <Icons.Tech />
              <h3 className="text-2xl font-bold text-white tracking-tight">Kỹ năng Số & Công nghệ</h3>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed">
              Ứng dụng AI, Prompt Engineering vào việc học. Đam mê tự tìm tòi lập trình, thiết lập máy chủ và quản lý hệ thống dữ liệu cá nhân.
            </p>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        </motion.section>

        {/* ========================================================
            4. DỰ ÁN & BÀI TẬP 
           ======================================================== */}
        <motion.section 
          id="bai-tap" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-24 py-20 relative"
        >
          <motion.div variants={fadeUpVariant} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">[ Danh sách Bài tập ]</h2>
            <p className="text-sm text-slate-600 mt-2">// SYSTEM.LOG: Các sản phẩm thực hành được tổng hợp.</p>
          </motion.div>
          
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
            {exercises.map((ex, index) => (
              <motion.div 
                variants={fadeUpVariant}
                key={index} 
                className="group relative bg-[#0a0a12] p-8 hover:bg-black/40 transition-colors flex flex-col h-full"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="px-2 py-1 bg-slate-800 text-slate-500 text-xs font-bold tracking-widest rounded-sm border border-slate-700 group-hover:text-amber-400 transition-colors">
                    {ex.label}
                  </div>
                  <div className="text-xl font-black text-slate-800 group-hover:text-slate-600 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">{ex.title}</h3>
                <p className="text-slate-500 text-sm mb-8 flex-grow">{ex.desc}</p>
                
                <Link href={`/bai-tap/${index + 1}`} className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-widest group">
                  Phân tích chi tiết <Icons.Link />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ========================================================
            5. TỔNG KẾT
           ======================================================== */}
        <motion.section 
          id="tong-ket" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="scroll-mt-24 py-20 relative"
        >
          <motion.div variants={fadeUpVariant} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">[ TỔNG KẾT HỆ THỐNG ]</h2>
            <p className="text-sm text-slate-600 mt-2">// SYSTEM.EVALUATION: Đánh giá quá trình và phân bổ kỹ năng.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <motion.div variants={fadeUpVariant} className="md:col-span-3 bg-[#0a0a12] border border-slate-800 p-8 md:p-10 flex flex-col justify-between hover:border-cyan-400 transition-colors group">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-8">
                  <span className="w-2 h-2 bg-cyan-400 animate-pulse"></span>
                  _ &gt; Executing: summary_log.exe
                </div>
                <div className="space-y-5 text-slate-400 text-sm md:text-base font-medium leading-relaxed">
                  <p><span className="text-slate-600 font-bold mr-2">01.</span> Hoàn thành tốt các học phần nền tảng, nắm vững nguyên lý vận hành của cả lưới điện truyền thống lẫn năng lượng tái tạo.</p>
                  <p><span className="text-slate-600 font-bold mr-2">02.</span> Khả năng ứng dụng linh hoạt các công cụ phần mềm vào việc thiết kế, mô phỏng mạch và phân tích dữ liệu kỹ thuật.</p>
                  <p><span className="text-slate-600 font-bold mr-2">03.</span> <span className="text-slate-200">Định hướng tương lai:</span> Sẵn sàng tích hợp kiến thức vào các dự án Smart Grid và giải pháp lưu trữ năng lượng bền vững.</p>
                </div>
              </div>
              <div className="mt-10 text-xs text-slate-600 font-bold uppercase tracking-widest border-t border-slate-800 pt-4">
                [ THUẬT TOÁN ĐÁNH GIÁ: THÀNH CÔNG ]
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="md:col-span-2 bg-[#0a0a12] border border-slate-800 p-8 md:p-10 hover:border-amber-400 transition-colors">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-8">// CHỈ SỐ NĂNG LỰC</div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-3 uppercase tracking-widest">
                    <span>Năng lượng Tái tạo</span>
                    <span className="text-amber-400">90%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-amber-400 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-white"></div>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-3 uppercase tracking-widest">
                    <span>Mô phỏng Hệ thống</span>
                    <span className="text-cyan-400">80%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-cyan-400 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-white"></div>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-3 uppercase tracking-widest">
                    <span>Phân tích Dữ liệu</span>
                    <span className="text-slate-100">75%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-slate-100 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3 bg-white"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========================================================
            6. LIÊN HỆ
           ======================================================== */}
        <motion.section 
          id="lien-he"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="scroll-mt-24 py-20 pb-32"
        >
          <div className="bg-[#0a0a12] border border-slate-800 p-10 md:p-16 text-center relative shadow-[0_0_60px_rgb(0,255,255,0.03)] hover:shadow-[0_0_60px_rgb(255,191,0,0.03)] transition-shadow">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-600"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-slate-600"></div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-none">TRẠM KẾT NỐI.</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-12 text-sm leading-relaxed">
              Bạn cần trao đổi về học thuật, dự án năng lượng hoặc cơ hội hợp tác Clean-Tech. Hệ thống luôn sẵn sàng tiếp nhận tín hiệu.
            </p>
            
            <a href="mailto:25023098@vnu.edu.vn" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-sm hover:bg-amber-400 transition-colors shadow-lg">
              SYSTEM_CONNECT: 25023098@vnu.edu.vn
            </a>
          </div>
        </motion.section>

      </div>

      {/* ========================================================
          7. FOOTER
         ======================================================== */}
      <footer className="relative z-10 border-t border-slate-800 bg-[#050509] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-white font-black tracking-tighter">
            [ <span className="text-amber-400">DAI</span>.TRAN ]
          </div>
          <div className="text-slate-600 font-medium">
            © {new Date().getFullYear()} // STATUS: ONLINE // UET_ENERGY_ENG.
          </div>
        </div>
      </footer>

    </main>
  );
}