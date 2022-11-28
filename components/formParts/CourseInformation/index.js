import { useFullData } from '../../../contexts/fullDataContext'
import { branchMap, courseMap } from '../../../helper/data'
import FormDiv from '../../FormDiv'
import FormSection from '../../formSection'

export default function CourseInformation() {
  const { degree, course, branch, isTransport, isHostel, dropPoint, dispatch } =
    useFullData()

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'CHANGE', name, value })
  }
  const handleDegree = (e) => {
    dispatch({ type: 'CHANGE_DEGREE', payload: e.target.value })
  }
  const handleCourse = (e) => {
    dispatch({ type: 'CHANGE_COURSE', payload: e.target.value })
  }

  return (
    <FormSection title="Course Information">
      <div className="formFlex">
        <FormDiv title="Choose Degree">
          <select required name="degree" value={degree} onChange={handleDegree}>
            <option disabled value="">
              Choose Degree
            </option>
            <option value="ug">UG</option>
            <option value="pg">PG</option>
          </select>
        </FormDiv>
        {degree && (
          <FormDiv title="Course opted for">
            <select
              required
              name="course"
              value={course}
              onChange={handleCourse}
            >
              <option disabled value="">
                Choose course
              </option>
              {courseMap[degree]?.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </FormDiv>
        )}
        {course !== 'mba' && course !== '' && (
          <FormDiv title="Choose Branch">
            <select
              required
              name="branch"
              value={branch}
              onChange={handleChange}
            >
              <option disabled value="">
                Choose branch
              </option>
              {branchMap[course]?.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </FormDiv>
        )}
      </div>
      <div className="formGrid">
        <FormDiv title="Do you need Hostel Facility?">
          <select
            required
            name="isHostel"
            value={isHostel}
            onChange={handleChange}
          >
            <option disabled value="">
              Choose Answer
            </option>
            <option value="boysHostel">Boys Hostel</option>
            <option value="girlsHostel">Girls Hostel</option>
            <option value="no">Not Required</option>
          </select>
        </FormDiv>
        <FormDiv title="Do you require Transport Facility?">
          <select
            required
            name="isTransport"
            value={isTransport}
            onChange={handleChange}
          >
            <option disabled value="">
              Choose Answer
            </option>
            <option value="yes">YES</option>
            <option value="no">NOT Required</option>
          </select>
        </FormDiv>
        {isTransport === 'yes' && (
          <FormDiv title="Your Drop Point?">
            <input
              name="dropPoint"
              value={dropPoint}
              onChange={handleChange}
              type="text"
              placeholder="Enter Drop Point"
            />
          </FormDiv>
        )}
      </div>
    </FormSection>
  )
}
