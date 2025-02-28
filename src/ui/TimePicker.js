import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimeCard = ({isVisible, onConfirm, onCancel}: any) => {
  return (
    <>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};
export default TimeCard;
