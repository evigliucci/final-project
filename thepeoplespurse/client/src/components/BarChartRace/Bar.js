import React, { Fragment } from 'react';
import { motion } from 'framer-motion'

const classes = {
    bar: {
        position: "relative",
    },
    container: {
        width: "100%",
        displamarginTop: "flex",
        position: "absolute",
    }
}

function Bar(props) {

    const barDefaultStyle = {
        ...props.prevStyle,
    };
    const barTransitionStyles = {
        initial: props.prevStyle,
        animate: props.currStyle,
    };
    const posTransitionStyles = {
        transition: {
            ease: 'easeInOut',
            duration: props.timeout
        }
    }
    return (
        <div>
            <motion.div>
                <Fragment>
                    <motion.div className="label"
                        animate={{
                            width: `${props.width[0]}%`,
                        }}
                        transition={{
                            ease: 'easeInOut',
                            duration: .25
                        }}
                    >
                        {props.label}
                    </motion.div>
                    <motion.div className="bar"
                        animate={{
                            width: `${props.width[1]}%`
                        }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 2.25
                        }}
                    >
                        <motion.div
                            initial={{
                                ...classes.bar,
                            }}
                            animate={{
                                ...classes.bar,
                                ...props.currStyle,
                            }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 1.25
                            }}
                        />
                    </motion.div>
                    <motion.div className="value"

                        animate={{
                            width: `${props.width[2]}%`
                        }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1.25
                        }}
                    >
                        <div>
                            {props.value}
                        </div>
                    </motion.div>
                </Fragment>
            </motion.div>
        </div>
    );
}

export default Bar;