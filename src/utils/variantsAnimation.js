const staggerAnimation = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition:{
      delay: 0.1 * index
    }
  })
}

const navigationAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition:{
      duration: 0.3
    }
  }
}

const fadedBounceAnimation = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.3,
      stiffness: 180
    }
  }
}

const headerIntro = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.8,
      duration: 0.8,
    }
  }
}

const introAnimationOne = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  }
}
const introAnimationTwo = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 1
    }
  }
}
const introAnimationThree = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 1.5
    }
  }
}

export {
  navigationAnimation,
  fadedBounceAnimation,
  staggerAnimation,
  introAnimationOne,
  introAnimationTwo,
  introAnimationThree,
  headerIntro
}