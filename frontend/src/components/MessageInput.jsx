import { Image, Send, X } from "lucide-react"

const MessageInput = () => {
  return (
    <div className='p-4 w-full'>
        <div className="mb-3 flex items-center gap-2">
            <div className="relative">
                <img
                alt="Preview" 
                className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
                />
                <button
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
                >
                    <X className="size-3"/>
                </button>
            </div>
        </div>
      
      <form className='flex items-center gap-2'>
        <div>
            <input 
                type="text" 
                placeholder='Type a message...'
                className='w-full input input-bordered rounded-lg input-sm sm:input-md'

            />
            <input 
                type="file" 
                accept="image/*"
                className="hidden"
            />
            <button
            className={`hidden sm:flex btn btn-circle
                      "text-emerald-500` }
            >
                <Image size={20}/>
            </button>
        </div>
        <button
            type="submit"
            className="btn btn-sm btn-circle"
        >
            <Send size={22}/>
        </button>
      </form>
    </div>
  )
}

export default MessageInput
