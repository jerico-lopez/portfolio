const Loader = () => {
  return (
    <div className="fixed flex items-center justify-center h-screen w-full bg-gradient-to-bl from-cyan-900 dark:to-gray-900 z-50">
      <img src="./logo.png" alt="Logo" className="h-50 w-50 animate-pulse drop-shadow-[0_0_25px_rgba(0,255,245,0.7)]" />
    </div>
  )
}

export default Loader