import React, { useState } from 'react';
import { GoPeople } from "react-icons/go";
import { FaMinus, FaPlus } from "react-icons/fa";

const Guest = () => {
    const [openOption, setOpenOption] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const handleOption = (name, operation) => {
        setOption((prev) => {
            return {
                ...prev, [name]: operation === "i" ? option[name] + 1 : option[name] - 1
            }
        });
    };

    return (
        <div className='guests'>
            <GoPeople className='guests-icon' />
            <div className="guests-content">
                <label>Guests</label>
                <span onClick={() => setOpenOption(!openOption)}>{`${option.adult} adult, ${option.children} children, ${option.room} room`}</span>
                {
                    openOption && (
                        <div className='options'>
                            <div className="option-items">
                                <span>Adult</span>
                                <div className="option-counter">
                                    <button disabled={option.adult <= 1} className='option-counter-button' onClick={() => handleOption("adult", "d")}>
                                        <FaMinus />
                                    </button>
                                    <span>{option.adult}</span>
                                    <button className='option-counter-button' onClick={() => handleOption("adult", "i")}>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                            {/*  */}
                            <div className="option-items">
                                <span>Children</span>
                                <div className="option-counter">
                                    <button disabled={option.children <= 0} className='option-counter-button' onClick={() => handleOption("children", "d")}>
                                        <FaMinus />
                                    </button>
                                    <span>{option.children}</span>
                                    <button className='option-counter-button' onClick={() => handleOption("children", "i")}>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                            {/*  */}
                            <div className="option-items">
                                <span>Rooms</span>
                                <div className="option-counter">
                                    <button disabled={option.room <= 1} className='option-counter-button' onClick={() => handleOption("room", "d")}>
                                        <FaMinus />
                                    </button>
                                    <span>{option.room}</span>
                                    <button className='option-counter-button' onClick={() => handleOption("room", "i")}>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Guest;
