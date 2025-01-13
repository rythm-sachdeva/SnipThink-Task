

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-zinc-900">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-400">404</h1>
      <p className="mt-4 text-lg text-gray-200">Page Not Found</p>
      <p className="mt-2 text-gray-100">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-6">
        <a
          href="/"
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Go Back Home
        </a>
      </div>
    </div>
  </div>
  )
}

export default NotFound