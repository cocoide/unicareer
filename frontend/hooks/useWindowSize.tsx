import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // 初回レンダリング時とウィンドウのリサイズ時に実行
    window.addEventListener("resize", handleResize);
    // ウィンドウのリサイズイベントを監視し、画面サイズの変化に対応
    handleResize();
    // コンポーネントのアンマウント時にリサイズイベントのリスナーをクリーンアップ
    // (→マウント時のみ作用)
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    windowSize,
    isMobile: typeof windowSize?.width === "number" && windowSize?.width < 768,
    isDesktop:
      typeof windowSize?.width === "number" && windowSize?.width >= 768,
  };
}