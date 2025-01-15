import React from "react";

const StackBubble = ({image, content}) => {
    console.log(image)
    console.log(content)

    return (

        <div className='flex flex-row items-center bg-sky-800 rounded rounded-2xl w-fit m-2 px-3 py-1'>
				<img className='w-6 h-6' src={require(`../../images/StackLogos/${image}.png`)} alt='' />
					<p className='ms-2 text-white '>{content}</p>
			</div>
    )
}

export default StackBubble;