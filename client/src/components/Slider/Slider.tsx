import { ChangeEvent, useState } from "react";

export interface SliderProps {
  inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

const Slider = ({ inputProps }: SliderProps) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputProps?.onChange) inputProps.onChange(e);
    setSliderValue(parseInt(e.target.value));
  };

  return (
    <label htmlFor="slider">
      {sliderValue}
      <input
        {...inputProps}
        value={sliderValue}
        onChange={handleSliderChange}
        id="slider"
        type="range"></input>
    </label>
  );
};

export default Slider;
