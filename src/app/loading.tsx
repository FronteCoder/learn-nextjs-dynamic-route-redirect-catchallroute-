export default function Loading(){

    return (
        <div className="flex flex-col items-center justify-center space-y-4 animate-pulse">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
              <div className="bg-gray-200 w-8 h-8 rounded-full ml-2"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center mt-8">
              <div className="bg-gray-200 w-12 h-4 rounded"></div>
            </div>
          </div>
          <div className="bg-gray-300 h-4 w-48 rounded"></div>
          <div className="bg-gray-300 h-4 w-40 rounded"></div>
          <div className="bg-gray-300 h-4 w-32 rounded"></div>
        </div>
      );
    
}