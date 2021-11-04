export const pageAnim = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}
export const photoAnim = {
    hidden: {
        scale: 1.5,
        opacity: 0
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const ClickMeAnim = {
    hidden: { opacity: 0 },
    show: {
        opacity: 0.4,
        transition: { deley: 1.5, duration: 0.75, ease: "easeOut" }
    }
}

export const photoAnim2 = {
    hidden: {
        scale: 1.5,
        opacity: 0,
        y: -100
    },
    show: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const pAnim = {
    hidden: {
        scale: 0.5,
        opacity: 0,
        x: 200
    },
    show: {
        scale: 1,
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.75,
            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const photoAnim3 = {
    hidden: {
        scale: 1.5,
        opacity: 0,
        y: 100
    },
    show: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const titleAnim = {
    hidden: { y: 200 },
    show: {
        y: 0,
        transition: {
            duration: 0.75, ease: "easeOut"
        }
    }
}

export const fadeAnim = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut" }
    }
}
export const fadeAnim2 = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 3, ease: "easeOut" }
    }
}

export const lineAnim = {
    hidden: {
        width: "0%"
    },
    show: {
        width: "100%",
        transition: { duration: 1 }
    }
}
export const lineAnim2 = {
    hidden: {
        width: "0%"
    },
    show: {
        width: "90%",
        transition: { duration: 1.5 }
    }
}
export const lineAnim3 = {
    hidden: {
        width: "0%"
    },
    show: {
        width: "80%",
        transition: { duration: 2 }
    }
}

export const frameAnim = {
    hidden: { x: "-130%" },
    show: {
        x: "100%",
        transition: { ease: "easeOut", duration: 0.9 },
    }
}

export const frameContainer = {
    hidden: {
        opacity: 1
    },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.20, ease: "easeOut" }
    }
}

export const scrollFadeAnim = {
    hidden: {
        opacity: 0,
        scale: 1.2,
        transition: {
            duration: 0.75
        }
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.75
        }
    }
}

