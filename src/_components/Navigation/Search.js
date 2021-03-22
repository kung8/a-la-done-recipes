import React from 'react';

export default function Search(props) {
    const { search, updateSearch } = props;

    return (
        <form className="searchbar align-ctr" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Search..." value={search} onChange={e => updateSearch(e.target.value.toLowerCase())} />
            <svg width="20" height="20" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.66341 7.12078C9.01025 5.08672 8.55981 2.27013 6.65795 0.830009C4.75609 -0.610113 2.12258 -0.128696 0.776061 1.90571C-0.570457 3.93978 -0.120331 6.75602 1.78185 8.19614C3.13931 9.22401 4.93402 9.30316 6.3658 8.39883L9.47679 11.7061C9.8127 12.0843 10.3716 12.0994 10.7252 11.7402C11.0788 11.3813 11.0929 10.7835 10.7574 10.4054C10.7467 10.3933 10.7364 10.3823 10.7252 10.371L7.66341 7.12078ZM4.21716 7.42911C2.71428 7.42945 1.49581 6.12732 1.49485 4.51996C1.49453 2.9126 2.71202 1.60943 4.21523 1.60874C5.71619 1.60805 6.93401 2.90812 6.93691 4.51342C6.93948 6.12113 5.72263 7.42636 4.21909 7.42911C4.21845 7.42911 4.21813 7.42911 4.21716 7.42911Z" fill="black" /></svg>
        </form>
    )
}