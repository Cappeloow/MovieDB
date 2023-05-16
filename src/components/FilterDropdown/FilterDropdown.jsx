import React from "react"
export default function FilterDropdown({value, onChange}) {
    return (
        <>
       <select value={value} onChange={onChange}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
       </select>
        </>
    )
}