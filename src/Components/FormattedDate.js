const FormattedDate = ({ date }) => {
    let unixTimestamp = date;

    const milliseconds = unixTimestamp * 1000;

    const dateObject = new Date(milliseconds);

    const formatDate = dateObject.toLocaleString(); //2022-01-19 10:30:15
    const weekday = dateObject.toLocaleString("en-US", { weekday: "long", month: "numeric", day: "numeric" });

    return <>{weekday}</>;
};

export default FormattedDate;