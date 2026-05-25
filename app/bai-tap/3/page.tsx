'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Exercise3() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-[#050509] text-slate-300 font-mono relative selection:bg-amber-400 selection:text-black pb-24">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', bgSize: '40px 40px' }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
        
        {/* Nút Quay lại hệ thống */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
          <Link href="/#bai-tap" className="inline-flex items-center gap-3 text-amber-400 hover:text-cyan-400 transition-colors text-sm font-bold tracking-widest uppercase bg-slate-900/50 px-4 py-2 border border-slate-800 rounded-sm hover:border-cyan-900">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            QUAY LẠI HỆ THỐNG
          </Link>
        </motion.div>

        {/* Header Báo cáo */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs font-bold tracking-widest rounded-sm border border-slate-700 uppercase">
              BT 03
            </span>
            <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold tracking-widest rounded-sm border border-slate-700 uppercase">
              AI & Sáng tạo nội dung số
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
            ỨNG DỤNG AI TẠO SINH TRONG SÁNG TẠO NỘI DUNG SỐ
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-b border-slate-800 pb-8 mb-12 font-bold tracking-widest">
            <span>// AUTHOR: TRẦN TRỌNG ĐẠI</span>
            <span>// ID: 25023098</span>
            <span className="text-amber-400">// STATUS: COMPLETED</span>
          </div>
        </motion.div>

        {/* Nội dung chi tiết */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="space-y-16 text-slate-400 leading-relaxed text-sm md:text-base">
          
          {/* Phần I */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              I. Thông tin chung về dự án blog kỹ thuật
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-6 md:p-8 space-y-4">
              <p><strong className="text-slate-200">● Tên dự án:</strong> Bài viết Blog chuyên đề kỹ thuật: "Thách thức lưu trữ năng lượng: Tương lai nào cho điện mặt trời và điện gió tại Việt Nam?"</p>
              <p><strong className="text-slate-200">● Mục tiêu:</strong> Phân tích thực trạng và đề xuất giải pháp kỹ thuật vật liệu cho vấn đề lưu trữ năng lượng tái tạo quy mô lưới điện.</p>
              <p><strong className="text-slate-200">● Hệ sinh thái AI (3 công cụ):</strong></p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div className="bg-slate-900/40 p-4 border border-slate-800">
                  <div className="text-cyan-400 font-bold mb-2">1. Google Gemini</div>
                  <p className="text-xs text-slate-500">Nghiên cứu tài liệu, tổng hợp số liệu và xây dựng khung dàn ý logic.</p>
                </div>
                <div className="bg-slate-900/40 p-4 border border-slate-800">
                  <div className="text-amber-400 font-bold mb-2">2. DALL-E 3</div>
                  <p className="text-xs text-slate-500">Sáng tạo hình ảnh minh họa trạm pin lưu trữ bên cạnh trang trại gió.</p>
                </div>
                <div className="bg-slate-900/40 p-4 border border-slate-800">
                  <div className="text-white font-bold mb-2">3. Canva Magic AI</div>
                  <p className="text-xs text-slate-500">Gợi ý bố cục, phối màu (Blue & Silver) và dàn trang Infographic.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Phần II */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              II. Nhật ký khai thác và đồng sáng tạo với AI
            </h2>
            <div className="space-y-6">
              <div className="bg-[#0a0a12] border border-slate-800 p-6">
                <div className="text-xs font-bold text-cyan-400 mb-3 tracking-widest">_ &gt; TÁC VỤ VĂN BẢN (GEMINI)</div>
                <p className="text-sm text-slate-500 italic mb-3">Prompt: "Đóng vai một chuyên gia kỹ thuật năng lượng, hãy lập một dàn ý chi tiết và viết nháp bài phân tích giới hạn vật lý của pin Lithium-ion..."</p>
                <p className="text-sm"><strong>Hiệu chỉnh (&gt;50%):</strong> Đắp thịt bằng kiến thức chuyên ngành. Bổ sung số liệu thực tế về hệ số công suất tại Ninh Thuận, đưa khái niệm vật lý chuyên sâu về mật độ năng lượng (Energy Density) thay vì từ ngữ chung chung của bản nháp.</p>
              </div>

              <div className="bg-[#0a0a12] border border-slate-800 p-6">
                <div className="text-xs font-bold text-amber-400 mb-3 tracking-widest">_ &gt; TÁC VỤ HÌNH ẢNH (DALL-E 3)</div>
                <p className="text-sm text-slate-500 italic mb-3">Prompt: "A highly detailed, hyper-realistic image of a modern, large-scale battery energy storage facility located next to a wind farm. Sunset, cinematic lighting..."</p>
                <p className="text-sm"><strong>Hiệu chỉnh:</strong> Nhận diện lỗi tỷ lệ vật lý ở các cánh tuabin gió góc phụ. Tiến hành tải ảnh về, dùng phần mềm cắt cúp (crop) loại bỏ chi tiết lỗi và tinh chỉnh độ tương phản để khớp tông màu blog.</p>
              </div>
            </div>
          </section>

          {/* Phần III */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              III. Phân tích chuyên sâu về vai trò & lằn ranh đạo đức
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0a0a12] border border-slate-800 p-6">
                <div className="text-xs font-bold text-slate-400 mb-4 tracking-widest">// SỰ CHUYỂN DỊCH QUY TRÌNH</div>
                <p className="text-sm">Quy trình tuyến tính truyền thống chuyển thành <strong>Đồng sáng tạo (Co-creation)</strong> qua vòng lặp: <em>Đóng vai - Thử nghiệm Prompt - Đánh giá - Hiệu đính - Tích hợp</em>. AI giải quyết hội chứng trang giấy trắng, rút ngắn 60% thời gian xây khung nháp.</p>
              </div>
              <div className="bg-[#0a0a12] border border-slate-800 p-6">
                <div className="text-xs font-bold text-rose-500 mb-4 tracking-widest">// ĐẠO ĐỨC & TRÁCH NHIỆM MÔI TRƯỜNG</div>
                <p className="text-sm">Bên cạnh việc Fact-check ảo giác số liệu và bảo mật thông tin, việc lạm dụng LLMs sinh rác thải số sinh ra lượng <strong>Carbon Footprint</strong> lớn từ máy chủ, đi ngược lại triết lý phát triển bền vững và năng lượng xanh.</p>
              </div>
            </div>
          </section>

          {/* Phần IV: Trích đoạn sản phẩm cuối cùng */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              IV. Trích đoạn ấn phẩm Blog chuyên đề
            </h2>
            <div className="bg-[#07070d] border-l-2 border-amber-400 p-6 italic text-slate-400 text-sm md:text-base space-y-3">
              <div className="text-white font-bold not-italic font-mono text-lg mb-2">Thách thức lưu trữ: Nút thắt cổ chai của Năng lượng tái tạo tại Việt Nam</div>
              <p>"...Hệ thống lưu trữ bằng pin Lithium-ion (BESS) đang chạm đến giới hạn vật lý. Sự suy hao dung lượng nhanh chóng sau vài nghìn chu kỳ sạc-xả, cùng với rủi ro cháy nổ do quá nhiệt (thermal runaway), khiến chúng trở thành một bài toán đau đầu về chi phí bảo trì vòng đời dự án (OPEX) cho các kỹ sư vận hành.</p>
              <p>Chìa khóa thực sự để giải bài toán an ninh năng lượng trong dài hạn không chỉ nằm ở việc xây thêm các cánh đồng tuabin, mà nằm ở việc thương mại hóa các vật liệu thế hệ mới như pin thể rắn (Solid-state battery) hoặc hydro xanh..."</p>
            </div>
          </section>

          {/* Phần V: Trình xem file PDF trực tiếp */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-400 animate-pulse"></span> 
              V. TÀI LIỆU BÁO CÁO GỐC (PDF)
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-2 shadow-2xl h-[700px] w-full relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>
              
              <iframe 
                src="/lesson/lesson3.pdf" 
                className="w-full h-full border-none rounded-sm"
                title="Báo cáo Bài tập 3"
              />
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center tracking-widest">// SYSTEM.VIEWER: Hệ thống phân giải và hiển thị trực tiếp dữ liệu lesson3.pdf.</p>
          </section>

        </motion.div>
      </div>
    </main>
  );
}