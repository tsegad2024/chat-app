import { X } from "lucide-react"

const ChatHeader = () => {
  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="avatar">
                <div>
                    <img src="/avatar.png" alt="" />
                </div>
            </div>
            <div className="size-10 rounded-full relative">
                <h3 className="font-medium"> John Doe</h3>
                <p className="text-sm text-base-content/70">online</p>
            </div>
        </div>

        <button>
            <X/>
        </button>
      </div>
    </div>
  )
}

export default ChatHeader
