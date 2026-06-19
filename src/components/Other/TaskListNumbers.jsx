import React from 'react'

const TaskListNumbers = () => {
    return (
        <div className='m-5 flex gap-5  '>
            <div className="w-75 text-white px-6 py-3 bg-amber-400 rounded-xl">
                <h2>0</h2>
                <h3>New Task</h3>
            </div>
            <div className="w-75 text-white px-6 py-3 bg-red-400 rounded-xl">
                <h2>0</h2>
                <h3>New Task</h3>
            </div>
            <div className="w-75 text-white px-6 py-3 bg-blue-400 rounded-xl">
                <h2>0</h2>
                <h3>New Task</h3>
            </div>
            <div className="w-75 text-white px-6 py-3 bg-green-400 rounded-xl">
                <h2>0</h2>
                <h3>New Task</h3>
            </div>

        </div>
    )
}

export default TaskListNumbers
