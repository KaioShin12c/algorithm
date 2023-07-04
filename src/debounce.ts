function debounce(func: (args: unknown[]) => void, timeout = 300) {
  let timer: number;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(args), timeout);
  };
}
