import {
  FaCalendarDays,
  FaLocationDot,
  FaMagnifyingGlass,
  FaUserGroup,
} from "react-icons/fa6";
import "./TravelSearch.css";
function TravelSearch() {
  const handleSearch = (event) => {
    event.preventDefault();
  };
  return (
    <section className="travel-search-section">
      <div className="container">
        <form className="travel-search-box" onSubmit={handleSearch}>
          <div className="search-field">
            <div className="search-field-icon">
              <FaLocationDot />
            </div>
            <div className="search-field-content">
              <label htmlFor="destination">Destination</label>
              <select id="destination" defaultValue="">
                <option value="" disabled>
                  Where do you want to go?
                </option>
                <option value="goa">Goa</option>
                <option value="manali">Manali</option>
                <option value="jaipur">Jaipur</option>
                <option value="kerala">Kerala</option>
                <option value="ladakh">Ladakh</option>
              </select>
            </div>
          </div>
          <div className="search-divider"></div>
          <div className="search-field">
            <div className="search-field-icon">
              <FaCalendarDays />
            </div>
            <div className="search-field-content">
              <label htmlFor="travel-date">Travel Date</label>
              <input
                type="date"
                id="travel-date"
                aria-label="Select travel date"
              />
            </div>
          </div>
          <div className="search-divider"></div>
          <div className="search-field">
            <div className="search-field-icon">
              <FaUserGroup />
            </div>
            <div className="search-field-content">
              <label htmlFor="travellers">Travellers</label>
              <select id="travellers" defaultValue="2">
                <option value="1">1 Traveller</option>
                <option value="2">2 Travellers</option>
                <option value="3">3 Travellers</option>
                <option value="4">4 Travellers</option>
                <option value="5">5+ Travellers</option>
              </select>
            </div>
          </div>
          <button type="submit" className="travel-search-btn">
            <FaMagnifyingGlass />
            <span>Search Trips</span>
          </button>
        </form>
      </div>
    </section>
  );
}
export default TravelSearch;