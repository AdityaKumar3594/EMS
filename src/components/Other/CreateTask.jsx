import React from 'react'

const CreateTask = () => {
    return (
        <div className='mt-8 '>
            <form className='flex flex-wrap items-start justify-between gap-8 bg-[#272626] p-6 rounded-xl '>

                <div className='flex flex-col gap-5 w-[45%]'>
                    <div>
                        <h3 className='mb-2 text-sm font-medium'>Task Title</h3>
                        <input
                            type='text'
                            placeholder='Make a UI Design'
                            className='w-full rounded border border-gray-500 bg-transparent px-3 py-2 outline-none'
                        />
                    </div>

                    <div>
                        <h3 className='mb-2 text-sm font-medium'>Date</h3>
                        <input
                            type='date'
                            className='w-full rounded border border-gray-500 bg-transparent px-3 py-2 outline-none'
                        />
                    </div>

                    <div>
                        <h3 className='mb-2 text-sm font-medium'>Assign To</h3>
                        <input
                            type='text'
                            placeholder='Employee Name'
                            className='w-full rounded border border-gray-500 bg-transparent px-3 py-2 outline-none'
                        />
                    </div>

                    <div>
                        <h3 className='mb-2 text-sm font-medium'>Category</h3>
                        <input
                            type='text'
                            placeholder='Design, Dev, etc.'
                            className='w-full rounded border border-gray-500 bg-transparent px-3 py-2 outline-none'
                        />
                    </div>
                </div>

                <div className='flex flex-col w-[45%]'>
                    <h3 className='mb-2 text-sm font-medium'>Description</h3>
                    <textarea
                        rows='10'
                        placeholder='Enter task description...'
                        className='w-full rounded border border-gray-500 bg-transparent px-3 py-2 outline-none resize-none'
                    ></textarea>

                    <button
                        type='submit'
                        className='mt-5 rounded bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400'
                    >
                        Create Task
                    </button>
                </div>

            </form>

        </div>
    )
}

export default CreateTask
