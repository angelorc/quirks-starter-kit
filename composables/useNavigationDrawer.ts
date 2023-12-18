export const useNavigationDrawer = () => {
  const drawer = useState<boolean>("drawer", () => true);

  const open = () => {
    drawer.value = true
  }

  const close = () => {
    drawer.value = false
  }

  const toggle = () => {
    drawer.value = !drawer.value
  }

  return {
    drawer,
    open,
    close,
    toggle
  }
}