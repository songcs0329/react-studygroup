import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'

function RouterHookSample() {
  const history = useHistory()
  // console.log(history)
  const location = useLocation()
  // console.log(location)
  const match = useRouteMatch()
  // console.log(match)
  return null
}

export default RouterHookSample