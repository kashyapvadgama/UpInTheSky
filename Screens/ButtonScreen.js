import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from './Button';

// SVG icons
import Qw2 from '../assets/qw2.svg'; // external-link
import Qw3 from '../assets/qw3.svg'; // download
import Qw5 from '../assets/qw5.svg';
import Qw4 from '../assets/qw4.svg';
import Qw1 from '../assets/qw1.svg';

const ButtonScreen = () => {
  const handlePress = (name) => {
    console.log(`${name} Pressed`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Button Components</Text>

        {/* Normal State Section */}
        <View style={[styles.section,{flex:4}]}>
          <Text style={styles.sectionTitle}>Normal State</Text>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.componentTitle}>Normal Button</Text>
              <Button
                title="BUTTON"
                onPress={() => handlePress('Normal Button')}
                style={styles.buttonSpacing}
              />
            </View>

            <View style={styles.column}>
              <Text style={styles.componentTitle}>Button with glow</Text>
              <Button
                title="BUTTON"
                onPress={() => handlePress('Glow Button')}
                variant="glow"
                style={styles.buttonSpacing}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.componentTitle}>Delete Button</Text>
              <TouchableOpacity
                style={[styles.iconButton, styles.destructiveButton, styles.buttonSpacing]}
                onPress={() => handlePress('Delete')}
              >
                <Qw1 width={16} height={16} style={styles.icon} />
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.column}>
              <Text style={styles.componentTitle}>Action Button</Text>
              <TouchableOpacity
                style={[styles.iconButton, styles.actionButton, styles.buttonSpacing]}
                onPress={() => handlePress('Open in Figma')}
              >
                <Qw3 width={16} height={16} style={styles.icon} />
                <Text style={styles.actionButtonText}>Open in Figma</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fullWidth}>
            <Text style={styles.componentTitle}>Download Button</Text>
            <TouchableOpacity
              style={[styles.iconButton, styles.downloadButton, styles.buttonSpacing]}
              onPress={() => handlePress('Download')}
            >
              <Qw4 width={16} height={16} style={styles.icon} />
              <Text style={styles.downloadButtonText}>Download ZIP file of component</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons Section */}
        <View style={[styles.section,{flex:1}]}>
          <Text style={styles.sectionTitle}>Action Buttons</Text>

          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity
                style={[styles.iconButton, styles.actionButton, styles.buttonSpacing]}
                onPress={() => handlePress('Move Component')}
              > 
                <Qw5 width={16} height={16} style={styles.icon} />
                <Text style={styles.actionButtonText}>Move</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.column}>
              <TouchableOpacity
                style={[styles.iconButton, styles.actionButton, styles.buttonSpacing]}
                onPress={() => handlePress('Instant Preview')}
              >
                <Qw2 width={16} height={16} style={styles.icon} />
                <Text style={styles.actionButtonText}>Instant Preview</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Action Button Hover State */}
        <View style={[styles.section,{flex:1}]}>
          <Text style={styles.sectionTitle}>Action Button - Hover</Text>

          <View style={styles.fullWidth}>
            <TouchableOpacity
              style={[styles.iconButton, styles.actionHoverButton, styles.buttonSpacing]}
              onPress={() => handlePress('Move Component Hover')}
            >
              <Qw5 width={16} height={16} style={styles.icon} />
              <Text style={styles.actionButtonText}>Move Component</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A205C', // Dark navy background from Figma
  },
  container: {
    padding: 16,
    flex: 1,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#0A205C', // Keeping same as background for now
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  componentTitle: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
    color: '#8FA3D4', // Light blue/grey for component titles
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  column: {
    flex: 1,
    marginHorizontal: 8,
  },
  fullWidth: {
    width: '100%',
    marginBottom: 16,
  },
  buttonSpacing: {
    marginTop: 16,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  destructiveButton: {
    backgroundColor: '#DC2626', // Red for destructive action
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  downloadButton: {
    backgroundColor: '#E5E7EB',
  },
  actionHoverButton: {
    backgroundColor: '#F9FAFB', // Light hover color
  },
  buttonText: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontWeight: '500',
  },
  actionButtonText: {
    color: '#111827', // Dark text for action buttons
    marginLeft: 8,
    fontWeight: '500',
  },
  downloadButtonText: {
    color: '#1F2937', // Dark color for download button text
    marginLeft: 8,
    fontWeight: '500',
  },
  icon: {
    opacity: 0.9,
  },
});
