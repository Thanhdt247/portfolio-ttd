'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Exercise4() {
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
              BT 04
            </span>
            <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-bold tracking-widest rounded-sm border border-slate-700 uppercase">
              Giao tiếp & Hợp tác số
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
            HỒ SƠ LÀM VIỆC NHÓM: ỨNG DỤNG AI TRONG KỸ THUẬT & ĐỜI SỐNG
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-b border-slate-800 pb-8 mb-12 font-bold tracking-widest">
            <span>// TEAM: DÂN KỸ THUẬT NĂNG LƯỢNG VÀ VẬT LIỆU</span>
            <span>// CLASS: VNU1001_E252018</span>
            <span className="text-amber-400">// ROLE: THÀNH VIÊN DỰ ÁN</span>
          </div>
        </motion.div>

        {/* Nội dung chi tiết */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="space-y-16 text-slate-400 leading-relaxed text-sm md:text-base">
          
          {/* Phần I */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              I. Cấu trúc tổ chức & Phân công nhiệm vụ nhóm
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-6 md:p-8 space-y-6">
              <p>Hệ thống nhân sự điều phối dự án gồm 5 thành viên phối hợp liên ngành giữa Năng lượng và Vật liệu:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-slate-800 p-4 bg-slate-900/20">
                  <span className="text-xs text-slate-500 block font-bold">// LEADER</span>
                  <span className="text-white font-bold">Nguyễn Văn Dương</span>
                  <p className="text-xs text-slate-400 mt-1">Tổng quát kiến thức cốt lõi hệ thống.</p>
                </div>
                <div className="border border-cyan-900 p-4 bg-cyan-950/10">
                  <span className="text-xs text-cyan-400 block font-bold">// CORE MEMBER (YOU)</span>
                  <span className="text-cyan-400 font-bold">Trần Trọng Đại</span>
                  <p className="text-xs text-slate-300 mt-1">Nghiên cứu và tổng hợp thực trạng ứng dụng AI trong kỹ thuật Năng lượng & Công nghệ Vật liệu tại Việt Nam.</p>
                </div>
                <div className="border border-slate-800 p-4 bg-slate-900/20">
                  <span className="text-xs text-slate-500 block font-bold">// MEMBER</span>
                  <span className="text-white font-bold">Lê Anh Duy</span>
                  <p className="text-xs text-slate-400 mt-1">Triển khai Demo hiệu năng và thiết kế hệ thống Prompt định hướng.</p>
                </div>
                <div className="border border-slate-800 p-4 bg-slate-900/20">
                  <span className="text-xs text-slate-500 block font-bold">// MEMBER</span>
                  <span className="text-white font-bold">Mai Văn Danh & Nông Tùng Diện</span>
                  <p className="text-xs text-slate-400 mt-1">Phân tích thách thức, phản biện, thiết kế infographic và kết luận định hướng tương lai.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Phần II */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              II. Nhật ký vận hành & Tiến độ hoạt động (Timeline)
            </h2>
            <div className="border-l-2 border-slate-800 ml-4 pl-6 space-y-8 relative">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="text-xs font-bold text-cyan-400 tracking-widest mb-1">BUỔI 1 (16/04/2026)</div>
                <p className="text-sm">Khởi động dự án, phản biện 4 phương án chủ đề. Thống nhất nghiên cứu chuyên đề: <strong className="text-slate-200">'AI và Thị giác máy tính (Computer Vision) trong Quản lý Giao thông Thông minh'</strong>.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-2 h-2 bg-slate-700 rounded-full"></div>
                <div className="text-xs font-bold text-slate-500 tracking-widest mb-1">BUỔI 2 & 3 (18 - 20/04/2026)</div>
                <p className="text-sm">Báo cáo tiến độ thu thập dữ liệu (Check-point 1). Nghiệm thu phần nghiên cứu tổng quát, các thành viên tối ưu tài liệu theo thế mạnh chuyên môn.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-2 h-2 bg-amber-400 rounded-full"></div>
                <div className="text-xs font-bold text-amber-400 tracking-widest mb-1">BUỔI 4 (25/04/2026)</div>
                <p className="text-sm">Ghép nối cấu trúc báo cáo hoàn chỉnh. Tổ chức chạy thử nghiệm kỹ thuật Prompt, kiểm duyệt chất lượng phân phối màu sắc Infographic và rà soát lỗi định dạng.</p>
              </div>
            </div>
          </section>

          {/* Phần III */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              III. Công cụ công nghệ số tích hợp vào dự án
            </h2>
            <div className="space-y-4">
              <div className="bg-[#0a0a12] border border-slate-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="text-xs font-bold text-amber-400 mb-2 tracking-widest">_ &gt; GOOGLE GEMINI (AI ENGINE)</div>
                  <p className="text-sm">Ứng dụng kỹ thuật đóng vai chuyên gia ITS để lên đề cương phân tích dòng giao thông hiện đại.</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 border border-emerald-500/20 whitespace-nowrap">RÚT NGẮN 50% TIMELINE</span>
              </div>
              <div className="bg-[#0a0a12] border border-slate-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="text-xs font-bold text-cyan-400 mb-2 tracking-widest">_ &gt; CANVA / CAPCUT / GAMMA</div>
                  <p className="text-sm">Xử lý đồ họa trực quan, tự động tạo phụ đề (Auto-caption) cho tư liệu video và tối ưu hóa cấu trúc bài trình chiếu số.</p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 border border-cyan-500/20 whitespace-nowrap">PRODUCTION: HIGH QUALITY</span>
              </div>
            </div>
          </section>

          {/* Phần IV */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> 
              IV. Chỉ số đóng góp cá nhân (Peer Evaluation)
            </h2>
            <div className="bg-[#0a0a12] border border-slate-800 p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-500">
                      <th className="pb-3 uppercase">Tiêu chí đánh giá</th>
                      <th className="pb-3 uppercase text-center">Tự đánh giá</th>
                      <th className="pb-3 uppercase text-center text-amber-400">Nhóm đánh giá</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300 divide-y divide-slate-900">
                    <tr>
                      <td className="py-3 font-medium">Chất lượng ý kiến & Nghiên cứu nội dung</td>
                      <td className="py-3 text-center">10 / 10</td>
                      <td className="py-3 text-center text-amber-400">10 / 10</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Tinh thần thái độ & Trách nhiệm làm việc nhóm</td>
                      <td className="py-3 text-center">10 / 10</td>
                      <td className="py-3 text-center text-amber-400">10 / 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                src="/lesson/lesson4.pdf" 
                className="w-full h-full border-none rounded-sm"
                title="Báo cáo Bài tập 4"
              />
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center tracking-widest">// SYSTEM.VIEWER: Hệ thống kết nối và phân giải tệp tin trực tiếp dữ liệu lesson4.pdf.</p>
          </section>

        </motion.div>
      </div>
    </main>
  );
}