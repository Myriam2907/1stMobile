import React, { useState } from 'react';
import { View, TextInput, Button,Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Appointment = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hour, setHour] = useState('');

  const iconColor = 'blue';

  const handleAddAppointment = () => {
    // Implement logic to add the appointment
    console.log('Appointment added:', { date, title, content, hour });
  };

  const handleReset = () => {
    // Implement logic to reset the form
    setDate('');
    setTitle('');
    setContent('');
    setHour('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {/* Title */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>Take an Appointment</Text>
      </View>

      {/* Date Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderColor: 'blue', borderWidth: 1, borderRadius: 5 }}>
        <Icon name="calendar" type="material" style={{ marginLeft: 10, color: iconColor }} />
        <TextInput
          style={{ height: 40, flex: 1, paddingLeft: 10, color: iconColor }}
          placeholder="Give the date of the appointment"
          value={date}
          onChangeText={(text) => setDate(text)}
        />
      </View>

      {/* Title Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderColor: 'blue', borderWidth: 1, borderRadius: 5 }}>
        <Icon name="title" type="material" style={{ marginLeft: 10, color: iconColor }} />
        <TextInput
          style={{ height: 40, flex: 1, paddingLeft: 10, color: iconColor }}
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>

      {/* Content Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderColor: 'blue', borderWidth: 1, borderRadius: 5 }}>
        <Icon name="description" type="material" style={{ marginLeft: 10, color: iconColor }} />
        <TextInput
          style={{ height: 40, flex: 1, paddingLeft: 10, color: iconColor }}
          placeholder="Content"
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>

      {/* Hour Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderColor: 'blue', borderWidth: 1, borderRadius: 5 }}>
        <Icon name="access-time" type="material" style={{ marginLeft: 10, color: iconColor }} />
        <TextInput
          style={{ height: 40, flex: 1, paddingLeft: 10, color: iconColor }}
          placeholder="Hour"
          value={hour}
          onChangeText={(text) => setHour(text)}
        />
      </View>

      {/* Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Button title="Add" onPress={handleAddAppointment} color="blue" />
        <Button title="Reset" onPress={handleReset} color="blue" />
      </View>
    </View>
  );
};

export default Appointment;
