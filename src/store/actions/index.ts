import * as CharactersActionCreators from './dataCharactersAction'
import * as CharacterActionCreators from './dataCharacterAction'

const actionsObject = {
    ...CharactersActionCreators,
    ...CharacterActionCreators
}

export default actionsObject