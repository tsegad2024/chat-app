import { Users } from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
        <div className="border-b border-base-300 w-full p-5">
            <div className='flex items-center gap-2'>
                <Users className='size-6'/>
                <span className='font-medium hidden lg:block'>Contacts</span>
            </div>      
            <div className="mt-3 hidden lg:flex items-center gap-2">
                <label className="cursor-pointer flex items-center gap-2">
                    <input type="checkbox" 
                    className="checkbox checkbox-sm"
                    />
                    <span className="text-sm">Show online only</span>
                </label>
                <span> (x -- online)</span>
            </div>
        </div>
        {/* Tobe -- Logic -- List of users to chat */}
        <div>

        </div>
    </aside>
  )
}

export default Sidebar
