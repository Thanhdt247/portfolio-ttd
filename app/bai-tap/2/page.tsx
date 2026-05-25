'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Exercise2() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-[#050509] text-slate-300 font-mono relative selection:bg-amber-400 selection:text-black pb-24">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', bgSize: '40px 40px' }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
        
        {/* Nút Trở về */}
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
              BT 02
            </span>
            <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold tracking-widest rounded-sm border border-slate-700 uppercase">
              Liêm chính Học thuật & AI
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
            SỬ DỤNG TRÍ TUỆ NHÂN TẠO CÓ TRÁCH NHIỆM TRONG HỌC TẬP VÀ NGHIÊN CỨU
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-b border-slate-800 pb-8 mb-12 font-bold tracking-widest">
            <span>// AUTHOR: TRẦN TRỌNG ĐẠI</span>
            <span>// ID: 25023098</span>
            <span className="text-amber-400">// STATUS: VERIFIED</span>
          </div>
        </motion.div>

        {/* Nội dung chi tiết */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="space-y-16 text-slate-400 leading-relaxed text-sm md:text-base">
          
          {/* Phần 1 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              I. Chính sách Liêm chính học thuật tại UET
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-6 md:p-8">
              <p className="mb-4">Tại Đại học Công nghệ (UET) - ĐHQGHN, việc sử dụng AI được quản lý nghiêm ngặt dưới lăng kính của các quy chế về đạo văn và gian lận thi cử:</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-amber-400">►</span>
                  <span><strong className="text-slate-200">Tính nguyên bản:</strong> Mọi đồ án, bài tập lớn phải là sản phẩm trí tuệ của chính sinh viên. Việc nhờ AI tạo ra phần lớn nội dung và nhận là của mình bị coi là vi phạm nghiêm trọng.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400">►</span>
                  <span><strong className="text-slate-200">Tính minh bạch:</strong> Nếu sử dụng AI để thu thập dữ liệu, phân tích số liệu hay dịch thuật, điều này bắt buộc phải được khai báo và trích dẫn rõ ràng trong danh mục tài liệu tham khảo.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Phần 2 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              II. Ứng dụng AI vào nhiệm vụ mô phỏng Vật lý
            </h2>
            <p className="mb-6">Nhiệm vụ: Viết script Python tính toán và mô phỏng sự suy giảm của cường độ điện trường theo khoảng cách (áp dụng Định luật Gauss cho dây dẫn thẳng dài mang điện).</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0a0a12] border border-slate-800 p-6 hover:border-slate-600 transition-colors">
                <div className="text-xs font-bold text-amber-400 mb-4 tracking-widest">// PROMPT ĐỊNH HƯỚNG</div>
                <p className="italic text-slate-500">"Giải thích Định luật Gauss áp dụng cho dây dẫn thẳng dài vô hạn. Viết hàm Python cơ bản tính cường độ điện trường E với các tham số: mật độ điện dài (lambda), hằng số điện môi và khoảng cách r..."</p>
              </div>
              <div className="bg-[#0a0a12] border border-slate-800 p-6 hover:border-cyan-400 transition-colors">
                <div className="text-xs font-bold text-cyan-400 mb-4 tracking-widest">// KẾT QUẢ & HIỆU CHỈNH</div>
                <p>AI cung cấp công thức chuẩn: <code className="text-amber-400 bg-amber-400/10 px-1 rounded">E = λ / (2π * ε0 * r)</code>. Thay vì dùng vòng lặp for của AI, tôi tự hiệu chỉnh code bằng hàm <code className="text-white">map()</code> để xử lý mảng tối ưu hơn và tích hợp <code className="text-white">matplotlib</code> để vẽ biểu đồ trực quan.</p>
              </div>
            </div>
          </section>

          {/* Phần 3 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              III. Xây dựng bộ 7 Nguyên tắc cá nhân
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Chỉ dùng AI khi đã nắm vững kiến thức nền tảng.",
                "Sử dụng 'Prompt định hướng', tuyệt đối không ra lệnh 'Viết cho tôi...'.",
                "Zero Trust: Mọi dữ kiện, công thức AI đưa ra đều phải kiểm chứng lại.",
                "Tự tay gõ lại code/văn bản để hiểu logic, không Copy-Paste 100%.",
                "Luôn minh bạch và trích dẫn công cụ AI trong mọi báo cáo.",
                "Bảo mật: Không nhập dữ liệu cá nhân hay mã nguồn độc quyền.",
                "Quy tắc 30 phút: Tự suy nghĩ trước khi tìm kiếm sự trợ giúp từ AI."
              ].map((rule, idx) => (
                <div key={idx} className="group flex gap-4 items-start bg-[#0a0a12] border border-slate-800 p-5 hover:border-amber-400 transition-colors">
                  <span className="text-2xl font-black text-slate-800 group-hover:text-amber-400 transition-colors leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm font-medium">{rule}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Phần 4: Nhúng file PDF trực tiếp */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-amber-400 animate-pulse"></span> 
              IV. TÀI LIỆU BÁO CÁO GỐC (PDF)
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-2 shadow-2xl h-[700px] w-full relative group">
              {/* Trang trí góc viền */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-400"></div>
              
              <iframe 
                src="/lesson/lesson2.pdf" 
                className="w-full h-full border-none rounded-sm"
                title="Báo cáo Bài tập 2"
              />
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center tracking-widest">// SYSTEM.VIEWER: Trình duyệt hỗ trợ xem trước định dạng PDF.</p>
          </section>

        </motion.div>
      </div>
    </main>
  );
}