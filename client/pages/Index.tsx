import { useState } from "react";

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("user");

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-[234px] bg-neutral-50 flex-shrink-0 flex flex-col">
          {/* Sidebar Header */}
          <div className="h-[52px] flex items-center justify-between px-[18px]">
            <svg width="23" height="20" viewBox="0 0 23 20" fill="none">
              <path d="M14.0622 0C14.24 0 14.4147 0.0460062 14.5674 0.131673C14.7201 0.218926 14.8475 0.342667 14.9341 0.493377L22.8725 14.1794C22.9559 14.3238 23 14.4856 23 14.6522C23 14.8172 22.9559 14.9806 22.8725 15.1249L20.3324 19.505C20.2458 19.6542 20.1199 19.7795 19.9657 19.8667C19.813 19.954 19.6383 20 19.4604 20H3.53798C3.36013 20 3.18544 19.954 3.03278 19.8667C2.88012 19.7795 2.75263 19.6542 2.66607 19.505L0.127481 15.1249C0.0440676 14.9806 0 14.8172 0 14.6522C0 14.4872 0.0440676 14.3238 0.127481 14.1794L8.06432 0.493377C8.15088 0.344253 8.27836 0.218926 8.43103 0.131673C8.58369 0.0444198 8.75838 0 8.93623 0H14.0622ZM5.98214 15.1186C5.98214 15.1186 9.2085 12.9325 11.4984 12.9325C13.7884 12.9325 17.0147 15.1186 17.0147 15.1186L11.4984 5.46046L5.98214 15.1186Z" fill="#1D293D"/>
            </svg>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/50 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.25 2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25ZM6 3.75H3V14.25H6V3.75ZM7.5 3.75V14.25H15V3.75H7.5Z" fill="#45556C"/>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="px-3 py-3 flex-1">
            <div className="space-y-1.5">
              <button className="w-full h-[42px] flex items-center gap-1.5 px-2.5 rounded bg-white shadow-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11.9993 2.24996C14.4848 2.24996 16.5 4.27137 16.5 6.74557V15.75H6.00074C3.5152 15.75 1.50001 13.7286 1.50001 11.2544V7.9929C1.96926 8.1588 2.47394 8.25 3.00001 8.25C5.48529 8.25 7.5 6.23525 7.5 3.74996C7.5 3.22391 7.40883 2.71922 7.24293 2.24996H11.9993ZM6.00002 9.75H7.5V8.25H6.00002V9.75ZM10.5 9.75H12V8.25H10.5V9.75ZM2.64698 0.989461C2.77938 0.670118 3.22063 0.67012 3.35303 0.989461L3.54273 1.44796C3.86666 2.23005 4.47116 2.85459 5.23096 3.19259L5.7693 3.43209C6.07701 3.56921 6.07697 4.01711 5.7693 4.15427L5.19947 4.40768C4.45873 4.73714 3.86504 5.33956 3.53541 6.09592L3.35011 6.51999C3.21477 6.83059 2.78524 6.83059 2.64991 6.51999L2.4646 6.09592C2.13496 5.33957 1.54129 4.73714 0.800542 4.40768L0.230717 4.15427C-0.0768878 4.01711 -0.0769237 3.56921 0.230717 3.43209L0.76905 3.19259C1.52884 2.8546 2.13335 2.23007 2.45728 1.44796L2.64698 0.989461Z" fill="#1447E6"/>
                </svg>
                <span className="text-sm font-bold text-primary">Hi, AgentGo</span>
                <div className="w-0.5 h-[22px] bg-primary absolute left-0 rounded-r"></div>
              </button>

              <button className="w-full h-[42px] flex items-center gap-1.5 px-2.5 rounded text-text-secondary hover:bg-white/50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9.25417 1.5066L9 3.00001C6.51473 3.00001 4.50002 5.01475 4.5 7.5C4.5 8.53815 4.85081 9.51855 5.48584 10.3111C5.54988 10.391 6.0902 10.9505 6.17359 11.0413C6.92066 11.8547 7.38043 12.5988 7.4795 13.5H10.5205C10.6195 12.5989 11.0791 11.8549 11.8257 11.042C11.9097 10.9505 12.4483 10.3927 12.5127 10.3125C13.1485 9.51975 13.5 8.53875 13.5 7.5L14.9927 7.24513C14.9962 7.32966 15 7.41461 15 7.5C15 8.9193 14.507 10.2234 13.6831 11.2508C13.2179 11.8308 12 12.75 12 13.875V15.75C12 16.5784 11.3285 17.25 10.5 17.25H7.5C6.67157 17.25 6 16.5784 6 15.75V13.875C5.99997 12.75 4.7809 11.83 4.31543 11.2492C3.49235 10.2222 3 8.91862 3 7.5C3.00002 4.18632 5.68631 1.50001 9 1.50001C9.08512 1.50001 9.16987 1.50308 9.25417 1.5066ZM7.5 15.75H10.5V15H7.5V15.75ZM13.147 0.246277C13.2794 -0.0730546 13.7206 -0.0730635 13.853 0.246277L14.0427 0.704774C14.3667 1.48687 14.9712 2.11141 15.7309 2.4494L16.2693 2.68891C16.577 2.82602 16.577 3.27392 16.2693 3.41108L15.6994 3.66449C14.9587 3.99395 14.365 4.59637 14.0354 5.35272L13.8501 5.77679C13.7148 6.08739 13.2853 6.08739 13.1499 5.77679L12.9653 5.35272C12.6357 4.59625 12.0414 3.99398 11.3006 3.66449L10.7307 3.41108C10.4231 3.27393 10.423 2.82601 10.7307 2.68891L11.2691 2.4494C12.0289 2.11141 12.6334 1.48688 12.9573 0.704774L13.147 0.246277Z" fill="#45556C"/>
                </svg>
                <span className="text-sm font-bold">오늘의 업무 요약</span>
              </button>

              <button className="w-full h-[42px] flex items-center gap-1.5 px-2.5 rounded text-text-secondary hover:bg-white/50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1.5 3C1.5 2.58579 1.83579 2.25 2.25 2.25H10.5V3.75H3V14.25H15V8.25H16.5V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3ZM5.25 9.75H6.75V12.75H5.25V9.75ZM8.25 5.25H9.75V12.75H8.25V5.25ZM11.25 7.5H12.75V12.75H11.25V7.5Z" fill="#45556C"/>
                </svg>
                <span className="text-sm font-bold">나의 활동</span>
              </button>

              <button className="w-full h-[42px] flex items-center gap-1.5 px-2.5 rounded text-text-secondary hover:bg-white/50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2.50459 12.7502C2.18041 12.1886 1.93708 11.6027 1.771 11.0056C2.50035 10.6334 2.99979 9.8751 2.99979 9.00015C2.99979 8.12588 2.5011 7.368 1.77265 6.99556C2.10769 5.78738 2.74393 4.6622 3.64855 3.74251C4.33552 4.18812 5.24201 4.24151 5.99979 3.804C6.75757 3.3665 7.16458 2.55476 7.12215 1.73703C8.37097 1.41345 9.66352 1.42503 10.8773 1.73897C10.8356 2.55605 11.2426 3.36684 11.9998 3.804C12.7576 4.24149 13.664 4.18812 14.3509 3.74255C14.785 4.1849 15.1708 4.68863 15.495 5.25016C15.8191 5.81168 16.0625 6.39769 16.2286 6.99471C15.4992 7.36685 14.9998 8.1252 14.9998 9.00015C14.9998 9.8745 15.4984 10.6323 16.2269 11.0048C15.8919 12.2129 15.2557 13.3381 14.351 14.2578C13.664 13.8122 12.7576 13.7588 11.9998 14.1963C11.242 14.6338 10.835 15.4456 10.8774 16.2633C9.62865 16.5869 8.3361 16.5753 7.12225 16.2614C7.16393 15.4442 6.75697 14.6335 5.99979 14.1963C5.24203 13.7588 4.33559 13.8122 3.64863 14.2577C3.21463 13.8154 2.82879 13.3117 2.50459 12.7502ZM6.74979 12.8973C7.56832 13.3699 8.15617 14.117 8.43772 14.9744C8.81145 15.01 9.18765 15.0105 9.56145 14.9756C9.84285 14.1178 10.4308 13.3701 11.2498 12.8973C12.0687 12.4244 13.0102 12.2891 13.8939 12.4743C14.1109 12.168 14.2986 11.8419 14.4547 11.5005C13.8529 10.828 13.4998 9.9453 13.4998 9.00015C13.4998 8.055 13.8529 7.1724 14.4547 6.49988C14.3766 6.33038 14.2903 6.16367 14.1959 6.00016C14.1015 5.83664 14.0002 5.67861 13.8925 5.52632C13.0093 5.71107 12.0683 5.57561 11.2498 5.10304C10.4312 4.63046 9.84345 3.88326 9.56182 3.02591C9.18817 2.99036 8.8119 2.98985 8.43817 3.02469C8.1567 3.88253 7.5687 4.63023 6.74979 5.10304C5.93085 5.57585 4.98934 5.71121 4.10571 5.52602C3.88864 5.83231 3.70097 6.15838 3.54492 6.49978C4.14661 7.17233 4.49979 8.055 4.49979 9.00015C4.49979 9.9453 4.14662 10.8279 3.54492 11.5004C3.623 11.6699 3.70923 11.8367 3.80364 12.0002C3.89804 12.1637 3.9993 12.3217 4.10709 12.474C4.99033 12.2893 5.93128 12.4247 6.74979 12.8973ZM8.99977 11.2502C7.75717 11.2502 6.74979 10.2428 6.74979 9.00015C6.74979 7.75755 7.75717 6.75016 8.99977 6.75016C10.2424 6.75016 11.2498 7.75755 11.2498 9.00015C11.2498 10.2428 10.2424 11.2502 8.99977 11.2502ZM8.99977 9.75015C9.414 9.75015 9.74977 9.41438 9.74977 9.00015C9.74977 8.58593 9.414 8.25015 8.99977 8.25015C8.58555 8.25015 8.24977 8.58593 8.24977 9.00015C8.24977 9.41438 8.58555 9.75015 8.99977 9.75015Z" fill="#45556C"/>
                </svg>
                <span className="text-sm font-bold">나의 에이전트 설정</span>
              </button>

              <button className="w-full h-[42px] flex items-center gap-1.5 px-2.5 rounded text-text-secondary hover:bg-white/50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2.25 2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25ZM15 5.42844L9.05385 10.7535L3 5.41195V14.25H15V5.42844ZM3.38359 3.75L9.04642 8.7465L14.6257 3.75H3.38359Z" fill="#45556C"/>
                </svg>
                <span className="text-sm font-bold">Teams</span>
              </button>

              <button className="w-full h-[42px] flex items-center gap-1.5 px-2.5 rounded text-text-secondary hover:bg-white/50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M5.0625 1.875C6.82291 1.875 8.25 3.30209 8.25 5.0625V8.25H5.0625C3.30209 8.25 1.875 6.82291 1.875 5.0625C1.875 3.30209 3.30209 1.875 5.0625 1.875ZM6.75 6.75V5.0625C6.75 4.13052 5.99448 3.375 5.0625 3.375C4.13052 3.375 3.375 4.13052 3.375 5.0625C3.375 5.99448 4.13052 6.75 5.0625 6.75H6.75ZM5.0625 9.75H8.25V12.9375C8.25 14.6979 6.82291 16.125 5.0625 16.125C3.30209 16.125 1.875 14.6979 1.875 12.9375C1.875 11.1771 3.30209 9.75 5.0625 9.75ZM5.0625 11.25C4.13052 11.25 3.375 12.0056 3.375 12.9375C3.375 13.8694 4.13052 14.625 5.0625 14.625C5.99448 14.625 6.75 13.8694 6.75 12.9375V11.25H5.0625ZM12.9375 1.875C14.6979 1.875 16.125 3.30209 16.125 5.0625C16.125 6.82291 14.6979 8.25 12.9375 8.25H9.75V5.0625C9.75 3.30209 11.1771 1.875 12.9375 1.875ZM12.9375 6.75C13.8694 6.75 14.625 5.99448 14.625 5.0625C14.625 4.13052 13.8694 3.375 12.9375 3.375C12.0056 3.375 11.25 4.13052 11.25 5.0625V6.75H12.9375ZM9.75 9.75H12.9375C14.6979 9.75 16.125 11.1771 16.125 12.9375C16.125 14.6979 14.6979 16.125 12.9375 16.125C11.1771 16.125 9.75 14.6979 9.75 12.9375V9.75ZM11.25 11.25V12.9375C11.25 13.8694 12.0056 14.625 12.9375 14.625C13.8694 14.625 14.625 13.8694 14.625 12.9375C14.625 12.0056 13.8694 11.25 12.9375 11.25H11.25Z" fill="#45556C"/>
                </svg>
                <span className="text-sm font-bold">Portal</span>
              </button>
            </div>
          </nav>

          {/* User Info */}
          <div className="p-3 space-y-2.5">
            <button className="w-full h-[42px] flex items-center gap-1.5 px-2.5 rounded border border-neutral-border text-text-secondary hover:bg-white/50 transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M14.25 16.5H3.75C2.50736 16.5 1.5 15.4927 1.5 14.25V2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H12.75C13.1642 1.5 13.5 1.83579 13.5 2.25V11.25H16.5V14.25C16.5 15.4927 15.4927 16.5 14.25 16.5ZM13.5 12.75V14.25C13.5 14.6642 13.8358 15 14.25 15C14.6642 15 15 14.6642 15 14.25V12.75H13.5ZM12 15V3H3V14.25C3 14.6642 3.33579 15 3.75 15H12ZM4.5 5.25H10.5V6.75H4.5V5.25ZM4.5 8.25H10.5V9.75H4.5V8.25ZM4.5 11.25H8.25V12.75H4.5V11.25Z" fill="#45556C"/>
              </svg>
              <span className="text-sm font-bold">이용가이드</span>
            </button>

            <div className="h-[58px] rounded">
              <div className="flex items-center gap-2.5 px-1.5">
                <div className="w-8 h-8 rounded-full border border-neutral-border bg-white flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.6668 18.3333H15.0002V16.6666C15.0002 15.2859 13.8809 14.1666 12.5002 14.1666H7.50016C6.11945 14.1666 5.00016 15.2859 5.00016 16.6666V18.3333H3.3335V16.6666C3.3335 14.3655 5.19898 12.5 7.50016 12.5H12.5002C14.8013 12.5 16.6668 14.3655 16.6668 16.6666V18.3333ZM10.0002 10.8333C7.23874 10.8333 5.00016 8.59473 5.00016 5.83331C5.00016 3.07189 7.23874 0.833313 10.0002 0.833313C12.7616 0.833313 15.0002 3.07189 15.0002 5.83331C15.0002 8.59473 12.7616 10.8333 10.0002 10.8333ZM10.0002 9.16665C11.8411 9.16665 13.3335 7.67426 13.3335 5.83331C13.3335 3.99236 11.8411 2.49998 10.0002 2.49998C8.15921 2.49998 6.66683 3.99236 6.66683 5.83331C6.66683 7.67426 8.15921 9.16665 10.0002 9.16665Z" fill="#1D293D"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-secondary">홍길동</span>
                  <span className="text-xs text-text-tertiary">gildong@itcen.com</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-[52px] flex items-center justify-end px-6 border-b border-transparent">
          {!sidebarOpen && (
            <button 
              onClick={() => setSidebarOpen(true)}
              className="mr-auto w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-50 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.25 2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25ZM6 3.75H3V14.25H6V3.75ZM7.5 3.75V14.25H15V3.75H7.5Z" fill="#45556C"/>
              </svg>
            </button>
          )}
          <button className="h-8 px-3 flex items-center gap-1.5 rounded bg-neutral-soft hover:bg-neutral-soft/80 transition-colors">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2.50459 12.7501C2.18041 12.1886 1.93708 11.6026 1.771 11.0056C2.50035 10.6334 2.99979 9.8751 2.99979 9.00015C2.99979 8.12587 2.5011 7.368 1.77265 6.99556C2.10769 5.78738 2.74393 4.6622 3.64855 3.74251C4.33552 4.18812 5.24201 4.2415 5.99979 3.804C6.75757 3.36649 7.16458 2.55476 7.12215 1.73703C8.37097 1.41345 9.66352 1.42503 10.8773 1.73896C10.8356 2.55604 11.2426 3.36684 11.9998 3.804C12.7576 4.24149 13.664 4.18812 14.3509 3.74255C14.785 4.18489 15.1708 4.68863 15.495 5.25016C15.8191 5.81167 16.0625 6.39769 16.2286 6.99471C15.4992 7.36685 14.9998 8.1252 14.9998 9.00015C14.9998 9.8745 15.4984 10.6323 16.2269 11.0047C15.8919 12.2129 15.2557 13.3381 14.351 14.2578C13.664 13.8122 12.7576 13.7588 11.9998 14.1963C11.242 14.6338 10.835 15.4456 10.8774 16.2633C9.62865 16.5868 8.3361 16.5753 7.12225 16.2613C7.16393 15.4442 6.75697 14.6335 5.99979 14.1963C5.24203 13.7588 4.33559 13.8121 3.64863 14.2577C3.21463 13.8154 2.82879 13.3117 2.50459 12.7501ZM6.74979 12.8973C7.56832 13.3699 8.15617 14.117 8.43772 14.9744C8.81145 15.01 9.18765 15.0105 9.56145 14.9756C9.84285 14.1178 10.4308 13.3701 11.2498 12.8973C12.0687 12.4244 13.0102 12.2891 13.8939 12.4743C14.1109 12.168 14.2986 11.8419 14.4547 11.5005C13.8529 10.828 13.4998 9.9453 13.4998 9.00015C13.4998 8.055 13.8529 7.1724 14.4547 6.49987C14.3766 6.33037 14.2903 6.16366 14.1959 6.00016C14.1015 5.83664 14.0002 5.67861 13.8925 5.52631C13.0093 5.71107 12.0683 5.5756 11.2498 5.10304C10.4312 4.63046 9.84345 3.88326 9.56182 3.02591C9.18817 2.99035 8.8119 2.98984 8.43817 3.02469C8.1567 3.88253 7.5687 4.63023 6.74979 5.10304C5.93085 5.57585 4.98934 5.7112 4.10571 5.52602C3.88864 5.83231 3.70097 6.15838 3.54492 6.49978C4.14661 7.17233 4.49979 8.055 4.49979 9.00015C4.49979 9.9453 4.14662 10.8279 3.54492 11.5004C3.623 11.6699 3.70923 11.8366 3.80364 12.0001C3.89804 12.1636 3.9993 12.3217 4.10709 12.474C4.99033 12.2893 5.93128 12.4247 6.74979 12.8973ZM8.99977 11.2501C7.75717 11.2501 6.74979 10.2428 6.74979 9.00015C6.74979 7.75755 7.75717 6.75016 8.99977 6.75016C10.2424 6.75016 11.2498 7.75755 11.2498 9.00015C11.2498 10.2428 10.2424 11.2501 8.99977 11.2501ZM8.99977 9.75015C9.414 9.75015 9.74977 9.41437 9.74977 9.00015C9.74977 8.58592 9.414 8.25015 8.99977 8.25015C8.58555 8.25015 8.24977 8.58592 8.24977 9.00015C8.24977 9.41437 8.58555 9.75015 8.99977 9.75015Z" fill="#1D293D"/>
            </svg>
            <span className="text-sm font-bold">
              <span className="text-text-secondary">활성 에이전트 </span>
              <span className="text-primary">9</span>
              <span className="text-text-secondary">개</span>
            </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M8.99998 9.87855L12.7123 6.16626L13.773 7.22692L8.99998 11.9999L4.22705 7.22692L5.28771 6.16626L8.99998 9.87855Z" fill="#1D293D"/>
            </svg>
          </button>
        </header>

        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
          {/* Background Gradient Blurs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1206 850" fill="none" className="max-w-[804px]">
              <g opacity="0.24" filter="url(#filter0_f)">
                <ellipse cx="799" cy="425" rx="206" ry="125" fill="#7797FF"/>
              </g>
              <g opacity="0.14" filter="url(#filter1_f)">
                <ellipse cx="466" cy="425" rx="265" ry="125" fill="#70CFFF"/>
              </g>
              <defs>
                <filter id="filter0_f" x="293" y="0" width="1012" height="850" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur"/>
                </filter>
                <filter id="filter1_f" x="-99" y="0" width="1130" height="850" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur"/>
                </filter>
              </defs>
            </svg>
          </div>

          {/* Main Content */}
          <div className="relative z-10 w-full max-w-[804px] flex flex-col items-center space-y-8">
            {/* Logo */}
            <div className="w-[140px] h-[140px] relative flex items-center justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/a585841982ff3e07c82f91b75ff57119f5f2d5f3?width=280" 
                alt="AgentGo Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title and Subtitle */}
            <div className="text-center space-y-2">
              <h1 className="text-[30px] font-bold text-text-primary leading-[133%]">
                무엇을 도와드릴까요?
              </h1>
              <p className="text-lg font-bold text-text-primary leading-[166%]">
                원하는 작업을 선택하거나 입력해보세요.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full max-w-[768px] rounded-lg border-[1.5px] border-primary bg-white shadow-[0_2px_8px_-2px_rgba(50,56,62,0.08),0_20px_24px_-4px_rgba(50,56,62,0.08)] p-2">
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="우리 회사의 휴가 규정을 알려줘"
                  defaultValue="우리 회사의 휴가 규정을 알려줘"
                  className="text-base text-text-primary leading-[150%] outline-none bg-transparent px-0.5"
                />
                <div className="flex items-center justify-between">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-neutral-border hover:bg-neutral-50 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M11.1215 5.81803L6.87885 10.0607C6.58595 10.3535 6.58595 10.8284 6.87885 11.1213C7.17174 11.4143 7.64662 11.4143 7.9395 11.1213L12.1822 6.87869C13.0608 6.00001 13.0608 4.5754 12.1822 3.69671C11.3035 2.81803 9.87885 2.81803 9.00015 3.69671L4.75753 7.93936C3.29306 9.40381 3.29306 11.7782 4.75753 13.2427C6.22199 14.7071 8.59635 14.7071 10.0608 13.2427L14.3035 9.00001L15.3641 10.0607L11.1215 14.3033C9.07125 16.3535 5.74712 16.3535 3.69687 14.3033C1.64662 12.2531 1.64662 8.92898 3.69687 6.87869L7.9395 2.63605C9.40395 1.17159 11.7784 1.17159 13.2428 2.63605C14.7073 4.10052 14.7073 6.47488 13.2428 7.93936L9.00015 12.182C8.12152 13.0607 6.69687 13.0607 5.81819 12.182C4.93951 11.3033 4.93951 9.87871 5.81819 9.00001L10.0608 4.75738L11.1215 5.81803Z" fill="#1D293D"/>
                    </svg>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-primary hover:bg-primary/90 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9.75014 5.87132V15H8.25014V5.87132L4.22717 9.8943L3.1665 8.83365L9.00014 3L14.8338 8.83365L13.7731 9.8943L9.75014 5.87132Z" fill="white"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-0 rounded border border-primary-outlined overflow-hidden">
              <button 
                className={`h-8 px-3 text-sm font-bold transition-colors ${
                  activeTab === 'user' 
                    ? 'bg-primary-outlined-active text-primary' 
                    : 'bg-transparent text-primary hover:bg-primary-outlined-active/50'
                }`}
                onClick={() => setActiveTab('user')}
              >
                사용자 설정
              </button>
              <div className="w-px h-full bg-primary-outlined"></div>
              <button 
                className={`h-8 px-3 text-sm font-bold transition-colors ${
                  activeTab === 'automation' 
                    ? 'bg-primary-outlined-active text-primary' 
                    : 'bg-transparent text-primary hover:bg-primary-outlined-active/50'
                }`}
                onClick={() => setActiveTab('automation')}
              >
                업무 자동화
              </button>
              <div className="w-px h-full bg-primary-outlined"></div>
              <button 
                className={`h-8 px-3 text-sm font-bold transition-colors ${
                  activeTab === 'tools' 
                    ? 'bg-primary-outlined-active text-primary' 
                    : 'bg-transparent text-primary hover:bg-primary-outlined-active/50'
                }`}
                onClick={() => setActiveTab('tools')}
              >
                외부 도구
              </button>
            </div>

            {/* Action Cards */}
            <div className="w-full max-w-[768px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-2 md:gap-y-4">
              <ActionCard 
                icon={<AIIcon />}
                label="오늘 수신한 메일을 조회해줘"
              />
              <ActionCard 
                icon={<AIIcon />}
                label="오늘 일정 알려줘"
              />
              <ActionCard 
                icon={<AIIcon />}
                label="오늘 근로 시간 등록해줘"
              />
              <ActionCard 
                icon={<PlusIcon />}
                label="빠른 작업 추가"
                isAdd
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ActionCard({ icon, label, isAdd = false }: { icon: React.ReactNode; label: string; isAdd?: boolean }) {
  return (
    <button className={`h-[72px] flex items-center gap-3.5 px-3.5 rounded-lg border border-neutral-border bg-white shadow-[0_1px_2px_0_rgba(50,56,62,0.08)] hover:shadow-[0_2px_4px_0_rgba(50,56,62,0.12)] transition-all ${isAdd ? 'cursor-pointer' : ''}`}>
      <div className={`w-9 h-9 flex items-center justify-center rounded flex-shrink-0 ${isAdd ? '' : 'bg-primary-50 p-1.5'}`}>
        {icon}
      </div>
      <span className={`text-sm font-bold leading-[142%] text-left ${isAdd ? 'text-text-tertiary' : 'text-text-primary'}`}>
        {label}
      </span>
    </button>
  );
}

function AIIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" fill="#8EC5FF"/>
      <path d="M11.0002 1.83327C11.7914 1.83327 12.5594 1.9339 13.2918 2.12242L12.8335 3.89756C12.2476 3.74675 11.6332 3.66661 11.0002 3.66661C6.95009 3.66661 3.66685 6.94988 3.66683 11C3.66683 12.9729 4.4468 14.8182 5.81437 16.1858L7.11149 17.482L6.25927 18.3333H11.0002C15.0503 18.3333 18.3335 15.0501 18.3335 11C18.3335 10.7038 18.3157 10.4114 18.2816 10.1245L20.1024 9.90869C20.1448 10.2666 20.1668 10.6307 20.1668 11C20.1668 16.0626 16.0627 20.1667 11.0002 20.1667H1.8335L4.51815 17.482C2.85932 15.8231 1.8335 13.5313 1.8335 11C1.83351 5.93735 5.93757 1.83327 11.0002 1.83327ZM14.6668 11.9167C14.6668 13.9417 13.0252 15.5833 11.0002 15.5833C8.97512 15.5833 7.3335 13.9417 7.3335 11.9167H14.6668ZM17.902 1.20933C18.0638 0.819025 18.6032 0.819012 18.765 1.20933L18.9968 1.76971C19.3927 2.72561 20.1315 3.48893 21.0602 3.90204L21.7173 4.19476C22.0938 4.36223 22.0938 4.90995 21.7173 5.07742L21.0217 5.38715C20.1164 5.78983 19.3908 6.52612 18.9879 7.45055L18.7614 7.96886C18.5959 8.34848 18.071 8.34848 17.9056 7.96886L17.6791 7.45055C17.2762 6.52611 16.5507 5.78983 15.6453 5.38715L14.9488 5.07742C14.5728 4.9098 14.5728 4.36234 14.9488 4.19476L15.6068 3.90204C16.5354 3.48893 17.2743 2.72562 17.6702 1.76971L17.902 1.20933Z" fill="#1447E6"/>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M11.9165 11.9167V5.41666H14.0832V11.9167H20.5832V14.0833H14.0832V20.5833H11.9165V14.0833H5.4165V11.9167H11.9165Z" fill="#45556C"/>
    </svg>
  );
}
