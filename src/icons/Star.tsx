const Star = ({ full, scale = 1 }: { full?: boolean; scale?: number }) => {
    return (
        <svg
            width={scale * 18}
            height={scale * 17}
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.48326 14.5819C8.80106 14.3901 9.19894 14.3901 9.51673 14.5819L13.151 16.7754C13.9083 17.2325 14.8425 16.5535 14.6416 15.692L13.6771 11.5578C13.5928 11.1963 13.7156 10.8178 13.9962 10.5748L17.2121 7.7889C17.8801 7.21013 17.5239 6.11271 16.6432 6.03677L12.4095 5.67169C12.0406 5.63989 11.7195 5.40691 11.5749 5.06612L9.92051 1.16859C9.57568 0.356232 8.42432 0.356232 8.07949 1.16859L6.42511 5.06612C6.28045 5.40691 5.95936 5.63989 5.59051 5.67169L1.35383 6.03703C0.473603 6.11293 0.11704 7.20947 0.784283 7.78856L3.99532 10.5754C4.27505 10.8182 4.39768 11.1957 4.31401 11.5565L3.35429 15.6957C3.15464 16.5567 4.08842 17.2344 4.84518 16.7777L8.48326 14.5819Z"
                fill={full ? '#F1CD12' : '#d7e0eb'}
            />
        </svg>
    );
};

export default Star;
