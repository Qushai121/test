import { ref, onMounted, onUnmounted } from "vue";

export default function useIsMobile() {
  const isMobileSize = ref(false);

  const handleResize = () => {
    isMobileSize.value = window.innerWidth <= 768;
  };

  onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return isMobileSize;
}
