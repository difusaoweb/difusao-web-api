import { camelCase } from 'lodash/string'

class UtilsService {
  public static camelCaseKeys (obj) {
    return Object.keys(obj).reduce((ccObj, field) => ({
      ...ccObj,
      [camelCase(field)]: obj[field]
    }), {})
  }
}

export default UtilsService
