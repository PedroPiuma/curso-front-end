// Switch Case x else if x Object

function getTypeId(type) {
    if (type === 'front-end') {
        return 1
    } else if (type === 'back-end') {
        return 2
    } else if (type === 'devops') {
        return 3
    }
}

getTypeId('front-end')

///////////////////////////////////////////////////////////

function getTypeID(type) {
    switch (type) {
        case 'front-end':
            return 1
        case 'back-end':
            return 2
        case 'devops':
            return 3
    }
}

getTypeID('front-end')

///////////////////////////////////////////////////////////

const typeIds = {
    'front-end': 1,
    'back-end': 2,
    'devops': 3,
}

typeIds['front-end']
