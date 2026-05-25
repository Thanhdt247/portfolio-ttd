'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Exercise5() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-[#050509] text-slate-300 font-mono relative selection:bg-amber-400 selection:text-black pb-24">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

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
              BT 05
            </span>
            <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold tracking-widest rounded-sm border border-slate-700 uppercase">
              Kỹ năng Công nghệ Số
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
            BÁO CÁO THỰC HÀNH: KỸ NĂNG VIẾT PROMPT HIỆU QUẢ
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-b border-slate-800 pb-8 mb-12 font-bold tracking-widest">
            <span>// AUTHOR: TRẦN TRỌNG ĐẠI</span>
            <span>// ID: 25023098</span>
            <span className="text-amber-400">// STATUS: OPTIMIZED</span>
          </div>
        </motion.div>

        {/* Nội dung chi tiết */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="space-y-16 text-slate-400 leading-relaxed text-sm md:text-base">
          
          {/* Phần I */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              I. Xây dựng các phiên bản Prompt theo tác vụ học tập
            </h2>
            <div className="space-y-4 bg-[#0a0a12] border border-slate-800 p-6 md:p-8">
              <p className="text-sm mb-4">Quá trình thử nghiệm tối ưu hóa câu lệnh (prompt) được triển khai trên 3 tác vụ lập trình Python cụ thể:</p>
              <div className="space-y-4 divide-y divide-slate-900">
                <div className="pt-2">
                  <span className="text-xs font-bold text-cyan-400 uppercase block mb-1">// TÁC VỤ 1: GIẢI THÍCH KHÁI NIỆM PHỨC TẠP</span>
                  <p className="text-slate-300">Giải thích cấu trúc trừu tượng <strong className="text-white">Decorator trong Python</strong> cho người mới bắt đầu bằng kỹ thuật kết hợp Role-prompting và phép ẩn dụ đời sống.</p>
                </div>
                <div className="pt-4">
                  <span className="text-xs font-bold text-amber-400 uppercase block mb-1">// TÁC VỤ 2: TẠO BỘ CÂU HỎI ÔN TẬP PHÂN CẤP</span>
                  <p className="text-slate-300">Thiết lập bộ đề đánh giá về cấu trúc dữ liệu <strong className="text-white">List, Tuple, Dictionary</strong> bám sát bẫy dữ liệu biến đổi (mutable/immutable) và ép khuôn cấu trúc (Formatting) đầu ra nghiêm ngặt.</p>
                </div>
                <div className="pt-4">
                  <span className="text-xs font-bold text-slate-400 uppercase block mb-1">// TÁC VỤ 3: TÓM TẮT TÀI LIỆU HỌC THUẬT</span>
                  <p className="text-slate-300">Trích lọc khối lượng tri thức từ bài luận khoa học dài tuân thủ chính xác theo cấu trúc khung sườn tiêu chí (Rubric) định sẵn để tối ưu thời gian nghiên cứu.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Phần II */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              II. Ma trận phân tích và so sánh hiệu quả
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-slate-800 p-6 bg-slate-900/10">
                <div className="text-xs font-bold text-slate-500 mb-3 tracking-widest">01 / PROMPT CƠ BẢN</div>
                <p className="text-sm text-slate-400">Kết quả trả về mang tính rập khuôn như từ điển học thuật, khô khan và rất khó để người mới bắt đầu có thể tiếp thu, áp dụng.</p>
              </div>
              <div className="border border-slate-800 p-6 bg-slate-900/10">
                <div className="text-xs font-bold text-slate-500 mb-3 tracking-widest">02 / PROMPT CẢI TIẾN</div>
                <p className="text-sm text-slate-400">Mô hình đã bổ sung thêm mã nguồn code minh họa, tuy nhiên cấu trúc trình bày lộn xộn, phần giải thích đáp án còn sơ sài.</p>
              </div>
              <div className="border border-cyan-900 p-6 bg-cyan-950/10">
                <div className="text-xs font-bold text-cyan-400 mb-3 tracking-widest">03 / PROMPT NÂNG CAO</div>
                <p className="text-sm text-slate-200">Hiệu quả vượt trội hoàn toàn. Nhờ kỹ thuật định hình vai trò sư phạm và chuỗi tư duy (Chain-of-thought), mô hình giải thích từng bước (step-by-step), không nhảy cóc kiến thức và đóng vai trò như một người gia sư thực thụ.</p>
              </div>
            </div>
          </section>

          {/* Phần III */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              III. Tổng hợp 4 nguyên tắc viết Prompt cốt lõi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0a0a12] border border-slate-800 p-5 group hover:border-cyan-400 transition-colors">
                <div className="text-xs font-bold text-cyan-400 mb-2">// 1. ROLE-PROMPTING</div>
                <p className="text-sm">Chỉ định rõ chuyên môn và vai trò của AI (Giảng viên, Chuyên gia thiết kế đề thi) để tự động điều chỉnh hệ thống từ vựng và độ sâu của câu trả lời.</p>
              </div>
              <div className="bg-[#0a0a12] border border-slate-800 p-5 group hover:border-amber-400 transition-colors">
                <div className="text-xs font-bold text-amber-400 mb-2">// 2. FORMATTING</div>
                <p className="text-sm">Cung cấp sẵn một biểu mẫu khung sườn ép buộc đầu ra (gạch đầu dòng, rubric, giới hạn câu) nhằm ngăn chặn tình trạng AI phản hồi lan man.</p>
              </div>
              <div className="bg-[#0a0a12] border border-slate-800 p-5 group hover:border-slate-400 transition-colors">
                <div className="text-xs font-bold text-slate-400 mb-2">// 3. CHAIN-OF-THOUGHT</div>
                <p className="text-sm">Yêu cầu AI phân tách các bước tư duy logic và giải thích tuần tự từng dòng code một để hạn chế tối đa hiện tượng ảo giác (hallucination).</p>
              </div>
              <div className="bg-[#0a0a12] border border-slate-800 p-5 group hover:border-cyan-400 transition-colors">
                <div className="text-xs font-bold text-cyan-400 mb-2">// 4. CONTEXTUALIZATION</div>
                <p className="text-sm">Thiết lập chi tiết bối cảnh cụ thể và ý định (Intention) sử dụng để mô hình tối ưu hóa nội dung phản hồi tinh tế và bám sát thực tế nhất.</p>
              </div>
            </div>
          </section>

          {/* Phần IV: Trình xem file PDF trực tiếp */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-400 animate-pulse"></span> 
              IV. TÀI LIỆU BÁO CÁO GỐC (PDF)
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-2 shadow-2xl h-[700px] w-full relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>
              
              <iframe 
                src="/lesson/lesson5.pdf" 
                className="w-full h-full border-none rounded-sm"
                title="Báo cáo Bài tập 5"
              />
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center tracking-widest">// SYSTEM.VIEWER: Hệ thống đồng bộ dữ liệu kết nối và hiển thị trực tiếp tệp tin lesson5.pdf.</p>
          </section>

        </motion.div>
      </div>
    </main>
  );
}