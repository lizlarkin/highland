let mongoose = require("mongoose");
let Product = require("../models/productModel");


mongoose.connect("mongodb://localhost/highland", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let productSeed = [

      // ****************************** D100 Data ******************************
      {
      name: "compact 250A laser driver",
      model: "D100",
      category: ["LDC"],
      features: [],
      description: "Drives bar laser stacks or VCSEL arrays up to 250 amps and 30 volts.",
      imgCaptions: ["D100 compact 250A laser driver", "standard D100 version -1", "standard D100 version -1", "standard D100 version -1", "standard D100 version -1", "evaluation D100 version -9", "evaluation D100 version -9", "evaluation D100 version -9"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** D200 Data ******************************
      {
      name: "diode laser driver",
      model: "D200",
      category: ["LDC"],
      features: [],
      description: "DC-coupled fast laser driver provides up to 4 amps of regulated constant current.",
      imgCaptions: ["D200 diode laser driver"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** J240 Data ******************************
      {
      name: "single-channel compact pulse generator",
      model: "J240",
      category: ["PSG", "LDC"],
      features: [],
      description: "Generates fast complementary rectangular or Gaussian outputs with external triggering and adjustable trigger levels.",
      imgCaptions: ["J240 version -1", "J240 version -2", "", "", "J240 power panel", "J240 version -1 signal panel", "J240 version -2 signal panel"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        [" Does the J240 have a programmable PRF?", "No, the J240 will need an external PRF source as a trigger."],
      ]
      },

      // ****************************** J270 Data ******************************
      {
      name: "compact single-channel adjustable delay and width electrical pulse generator",
      model: "J270",
      category: ["PSG"],
      features: [],
      description: "Very compact GaN-based nanosecond high-voltage pulse generator includes adjustable time delay and pulse width.",
      imgCaptions: ["J270 compact single-channel adjustable delay and width electrical pulse generator", "J270 Caption Two", "J720 Caption Three"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** J720 Data ******************************
      {
      name: "single-channel compact electrical-to-fiberoptic converter",
      model: "J720",
      category: ["PHO"],
      features: [],
      description: "Transports logic level or critical timing triggers over kilometer distances in high EMI environments.",
      imgCaptions: ["J720 single-channel compact electrical-to-fiberoptic converter"],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Connector Type",[[null, "ST"], ["1", "FC"]]],    
        ["Wavelength", [["1", "850 nm"], ["3", "1310 nm"]]],
      ],
      accessories: [],
      FAQs: [
        ["Does the J720 require a power supply?", "A power supply is not needed. Any low impedance 5V TTL source will power the J720. "], 
      ]
      },

      // ****************************** J724 Data ******************************
      {
      name: "single-channel compact buffered electrical-to-fiberoptic converter",
      model: "J724",
      category: ["PHO"],
      features: [],
      description: "Accepts an adjustable digital logic level input and functions as a fast fiber-coupled laser source.",
      imgCaptions: ["J724 single-channel compact buffered electrical-to-fiberoptic converter"],
      about: [],
      related: [],
      specifications: [],
      },
  
  
      // ****************************** J730 Data ******************************
      {
      name: "single-channel compact fiberoptic-to-electrical converter",
      model: "J730",
      category: ["PHO"],
      features: [
          ["Compact logic-level optical signal link receiver"], 
          ["Allows transport of logic levels and fast triggers over long distances in high EMI environments"],
          ["Fast electrical rise times"],
          ["Below 12 picoseconds typical RMS link jitter"],
          ["J730-1 and J730-11 use commonly-available 62/125 micron multimode ST or FC connectorized fiber at 850 nanometers"],
          ["J730-3, J730-5, J730-13, and J730-15 use singlemode or multimode ST or FC connectorized fiber at 1310 or 1550 nanometers"],
      ],
      description: "Converts fiber-coupled laser signals to TTL levels.",
      imgCaptions: ["J730 with ST connectorization", "J730 with FC connectorization", "", "", "J730 power panel", "J730 signal panel (ST connectorization)", "J730 signal panel (FC connectorization)"],
      about: [
          "It has always been difficult to transport fast logic signals long distances over copper conductors. Coaxial or twisted-pair transmission lines introduce attenuation, dispersion, ground loops, and provide an entrance point for external electrical noise. The result can be jitter, pulse width distortion, and ultimately logic errors.",
          "A J720/J730 combination can transport logic level or critical timing triggers over kilometer distances in high EMI environments with link jitter typically below 12 picoseconds RMS. The J730 provides a digital logic output with risetime below 750 picoseconds, and a fast analog (180 MHz bandwidth) output is also provided for monitoring link integrity.",
          "The J730 is compatible with the Highland J720 and J724 E/O Converters, the P500 Digital Delay/Pulse Generator, the company's VME-packaged electrical/optical converter products, and its other VME modules with optical I/O.",
  
      ],
      related: [
        "J720 single-channel compact electrical-to-fiberoptic converter",
        "J724 single-channel compact buffered electrical-to-fiberoptic converter",
        "P500 4-channel benchtop digital delay and pulse generator",
        "T124 1 to 4 logic buffer",
        "T760 dual-channel compact high voltage optical-to-electrical converter",
        "V720 6-channel VME buffered electrical-to-optical converter",
        "V730 6-channel VME optical-to-electrical converter",
      ],
      specifications: [
        ["FUNCTION", ["Single-channel optical-to-electrical converter"]],
        ["RESOLUTION", ["DC coupled fiberoptic input, ST or FC connector", "850, 1310, or 1550 nm wavelength", "1 mW nominal optical fiber power", "Threshold adjustable 100 µW to 800 µW, factory set to 300 µW", "See manual section 6 for versions"]],
        ["PROPAGATION DELAY", ["Light in to electrical out < 10 ns"]],
        ["OUTPUTS", ["Digital: +5 volts typ, 2.25 V typ into 50 Ω load", "Analog: +1 volt per mW optical input into 50 Ω load", "Source impedance: 50 Ω Optional high drive available"]],
        ["BANDWIDTH", ["DC to 180 MHz"]],
        ["RISETIME", ["Digital output: < 750 ps", "Analog output: < 2.5 ns"]],
        ["JITTER", ["< 12 ps RMS, J720 + J730"]],
        ["OPERATING TEMPERATURE", ["0 to 60°C"]],
        ["CALIBRATION INTERVAL", ["One year"]],
        ["POWER", ["+12 volts at 60 mA nominal", "J12 Universal Wall-Plug Adapter recommended"]],
        ["CONNECTORS", ["ST or FC optical input receptacles", "Gold plated SMB digital and analog output jacks", "Front panel test jacks for threshold measurement", "2.1 mm X 5.5 mm barrel power connector"]],
        ["INDICATOR", ["LED: Green power"]],
        ["PACKAGING", ['3.3" (L) x 2.1" (W) x 0.9" (H) extruded anodized aluminum enclosure']],
      ],
      optionsRequired: [
        ["Connector Type",[[null, "ST"], ["1", "FC"]]],    
        ["Wavelength", [["1", "850 nm"], ["3", "1310 nm"], ["5", "1550 nm"]]],
      ],
      accessories: [
        ["J12-1", "12 volt power supply", "(1 included with purchase)"],
        ["J14-1", "International plug adapter set for J12", "(1 included with purchase)"],
        ["J41-1", "3' SMB to SMB cable"],
        ["J41-2", '6" SMB to SMB cable'],
        ["J42-1", "3' SMB to SMA cable"],
        ["J53-1", "3' SMB to BNC cable"],
        ["J53-2", '6" SMB to BNC cable'],
        ["J59-1", "3' ST to ST fiberoptic cable (multi mode simplex)"],
        ["J60-1", "3' FC to FC fiberoptic cable (single mode simplex)"],
        ["J61-1", "3' ST to ST fiberoptic cable (single mode simplex)"],
      ],
      FAQs: [
        ["Are the SMB connectors on the J730 male or female?", "The connectors on the J730 are technically SMB 'Jacks', but their gender is 'male' because the center conductor is a pin, not a socket."], 
      ]
      },

      // ****************************** J736 Data ******************************
      {
        name: "single-channel compact high-voltage optical-to-electrical converter",
        model: "J736",
        category: ["PHO"],
        features: [],
        description: "Accepts a fiberoptic input and generates a high-voltage, DC-coupled, 50-ohm digital output.",
        imgCaptions: ["", "", ""],
        about: [],
        related: [],
        specifications: [],
        },

      // ****************************** J750 Data ******************************
      {
      name: "single-channel compact wideband amplifier",
      model: "J750",
      category: ["PSG", "PHO"],
      features: [],
      description: "Amplifies DC to 1 GHz signals with loop-through (signal pickoff) and photodiode modes.",
      imgCaptions: ["J750 single-channel compact wideband amplifier"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** P330 Data ******************************
      {
      name: "4-channel capacitive level sensor simulator",
      model: "P330",
      category: ["MAS"],
      features: [
        ["Four independent, isolated channels of simulated capacitive fuel/oil/fluid level sensor simulation"], 
        ["Three ranges of 3-wire capacitance and three ranges of resistance/conductance per channel"], 
        ["Monotonic, glitch-free settings within each range"], 
        ["16 bit capacitance and conductance resolution"], 
        ["Simulates sensor cable open/shorted faults"], 
        ["Measures and reports excitation amplitudes and frequencies"], 
        ["Includes BIST built-in-self-test and status/excitation LEDs"], 
        ["Ethernet and USB interfaces"], 
        ["Internal LOCK switch may be set to disable writes to nonvolatile memory"], 
      ],
      description: "Simulator of capacitive fuel or oil liquid level sensors can measure and report realtime excitation voltages and frequencies and simulate sensor faults.",
      imgCaptions: ["", "P330 front/signal panel", "P330 rear/power panel", ""],
      about: [
        "The P330 is a 4-channel benchtop/rackmount simulator of capacitive fuel or oil liquid level sensors. Each independent, isolated channel can simulate both the resistive and conductive components of a coaxial level sensor. The values are simulated electronically with 16-bit resolution, and are monotonic and glitch-free programmable within each impedance range. Interface is USB and Ethernet. The P330 measures and reports realtime excitation voltages and frequencies, can simulate sensor faults, and includes LED indicators and BIST."
      ],
      related: [],
      specifications: [
        ["FUNCTION", ["4-channel 3-wire capacitive fluid level sensor simulator"]],
        ["CHANNELS", ["A B C D, capacitance+resistance, independent, isolated"]],
        ["FREQUENCY RANGE", ["1 KHz to 50 KHz at specified accuracy, functional from 250 Hz to 250 KHz"]],
        ["EXCITATION INPUT", ["44 volts p-p max sine or triangle, AC coupled, 100K nom input impedance"]],
        ["CAPACITANCE RANGES", ["5-50 pF, 10-500 pF, 100-5000 pF"]],
        ["RESISTANCE RANGES", ["5K-100K, 50K-1M, 500K-10M", "Resistance ranges can be extended at reduced accuracy",]],
        ["ACCURACY", ["Capacitance: ± 2% of range ± 1 pF", "Resistance:", ["5K-100K ± 1% of setting", "50K-1M ± 1% of setting", "500K-1M ± 1% of setting", "1M-10M ± 5% of setting"], "Sine phase error: 1.5 degree Typ. 1KHz to 50 KHz", ]],
        ["RESOLUTION", ["16 bits, capacitance or conductance"]],
        ["OUTPUTS", ["20 mA RMS max, AC coupled"]],
        ["CONNECTORS", ["2 BNCs per channel, excitation and output", "One 2.4 mm barrel for +24 power",]],
        ["COMMUNICATIONS", ["USB serial port emulator, 115.2 Kbaud", "10/100 Mbps Ethernet",]],
        ["CALIBRATION INTERVAL", ["One year"]],
        ["POWER", ["External 24 volts DC, AC adapter furnished"]],
        ["PACKAGING", ['7.0" (L) x 8.5" (W) x 2.5" (H) Aluminum enclosure']],
        ["INDICATORS", ["LEDs indicate power, communications, excitations, USER"]],
        ["BIST", ["Functional self-test provided"]],
      ],
      baseModel: "1",
      accessories: [
        ["J24-1", "24 volt 1.2 amp power supply ", "(furnished with purchase)"],
        ["J27-1", "2.1 x 5.5 mm barrel to pigtail power cable "],
        ["P10-1", '19" rack mount shelf (two p-boxes per rack)'],
        ["P51-1", "Mounting Flange"],
      ],
      },

      // ****************************** P348 Data ******************************
      {
      name: "dual-channel benchtop I/Q modulator",
      model: "P348",
      category: ["MAS"],
      features: [
        ["Two independent, isolated I/Q quadrature modulator channels"], 
        ["Performs eddy current and proximity sensor simulation"], 
        ["Precision linear modulation of RF carrier inputs"], 
        ["Transformer isolated inputs/outputs"], 
        ["Switchable input impedances"], 
        ["Customizable for frequency, matching, and amplitudes"], 
      ],
      description: "Simulates a wide range of inductive proximity and eddy-current transducers, such as jet engine blade tip sensors and automotive engine measurements.",
      imgCaptions: ["", "P348 front/signal panel", "P348 rear/power panel", "",],
      about: [
        "The P348 is a compact benchtop/half-rack all-analog two channel quadrature modulator. Each channel's isolated sine wave input is split into quadrature (90 degree real/imaginary) phases and precision multiplied by user-supplied DC-coupled bipolar baseband input signals, then summed into an isolated output.",
        "The P348 can simulate a wide range of inductive proximity and eddy-current transducers, such as jet engine blade tip sensors, automotive engine measurements, and sub-micron semiconductor fabrication equipment sensors. It is also suitable for precision RF modulation, SSB generation, and mixing operations.",
        "The P348 is customizable for various carrier frequencies, signal levels, impedances, and connectors. Monitor outputs allow non-intrusive inspection of input and output waveforms. Each channel includes an additional signal or noise summing input."
      ],
      related: [
        "P350 8-channel waveform playback/ARB module",
        "P545 12-channel synchro / LVDT simulation / acquisition module",
        "T346 4-channel compact 32 MHz arbitrary waveform generator w/ complex modulation",
        "V346 8-channel VME 32 MHz arbitrary waveform generator w/ complex modulation",
        "V375 4-channel VME arbitrary waveform generator",
        "V545 24-channel VME synchro/LVDT simulation/acquisition module",
      ],
      specifications: [
        ["FUNCTION", ["Two-channel I/Q Modulator"]],
        ["CARRIER FREQUENCY", ["Single frequency, 14.8 MHZ", "Other frequencies on request",]],
        ["CARRIER INPUT RANGE", ["28Vpp nominal, 34Vpp Max", "Switchable input impedance 50 Ω, 100 Ω, HiZ",]],
        ["I INPUTS", ["± 5V, -3 dB at 1 MHz, 500 Ω"]],
        ["Q INPUTS", ["± 5V, -3 dB at 1 MHz, 500 Ω"]],
        ["OUTPUTS", ["400 mV p-p full scale into 50 Ω"]],
        ["SUM INPUTS", ["0.04 gain to loaded output for noise simulation", "5K Ω input impedance",]],
        ["90° PHASE SHIFT ACURRACY", ["± 3° at specified carrier frequency"]],
        ["INPUT MONITOR", ["Provides attenuated (140:1) signal for monitoring of input, 50 Ω"]],
        ["OUTPUT MONITOR", ["Provides attenuated (2:1) signal for monitoring of output, 50 Ω"]],
        ["CONNECTORS", ["Isolated Triaxial with optional grounding for IN and OUT carrier wave", "SMB for monitors, I, Q and SUM",]],
        ["PACKAGING", ['7.0" (L) x 8.5" (W) x 2.25" (H) Aluminum enclosure']],
        ["INDICATORS", ["Green power, two orange signal indicators"]],
        ["OPERATING TEMPERATURE", ["0 to 70°C"]],
        ["CALIBRATION INTERVAL", ["No internal calibrations"]],
        ["POWER", ["24 volts DC, 500mA max", "model J24, 24 VDC, 30 watt external adapter furnished", "2.1 x 5.5 mm barrel connector, center pin positive",]],
      ],
      baseModel: "1",
      accessories: [
        ["J24-1", "24 volt 1.2 amp power supply", "(furnished with purchase)"],
        ["J27-1", "2.1 x 5.5 mm barrel to pigtail power cable"],
        ["J42-1", "3′ SMB to SMA cable"],
        ["J47-1", "BNC female to triax male adapter"],
        ["J53-1", "3′ SMB to BNC cable"],
        ["J53-2", '6" SMB to BNC cable'],
        ["P10-1", '19" rack mount shelf (two p-boxes per rack)'],
        ["P51-1", "Mounting Flange"],
      ],
      },

      // ****************************** P350 Data ******************************
      {
      name: "8-channel waveform playback/ARB module",
      model: "P350",
      category: ["WFG"],
      features: [],
      description: "A standalone 8-channel waveform generator intended to play stored waveform files for aerospace simulations.",
      imgCaptions: ["P350 8-channel waveform playback/ARB module"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** P400 Data ******************************
      {
      name: "4-channel benchtop digital delay and pulse generator",
      model: "P400",
      category: ["LEG"],
      features: [],
      description: "Generates delays up to 1000 seconds in 1 picosecond increments, on four separately programmable delay-and-width outputs.",
      imgCaptions: ["P400 4-channel benchtop digital delay and pulse generator"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["What is the difference between the P400 and the P500?", "The Highland Model P500 Digital Delay/Pulse Generator is the successor of Model P400. We typically recommend purchasing the P500 over the P400 because it is less expensive, it has an improved user interface, and it will be supported for a very long time. The P400 design is over 10 years old and is being gradually phased out of our product offerings due to component obsolescence challenges. Some new features of the P500 include: improved packaging, color LCD, quiet fan, streamlined design, standard USB, Ethernet, and RS232, high performance pulse output stages with clean fast pulses from 0.5 to 25 volts p-p into 50 ohms, rep-rate to 14 MHz, glitch-free timing changes, and optional per-shot timing lists and multiple pulses per trigger."], 
      ]
      },

      // ****************************** P470 Data ******************************
      {
      name: "8-channel benchtop thermocouple simulator",
      model: "P470",
      category: ["MAS"],
      features: [],
      description: "Voltage source thermocouple simulator/calibrator for system-level testing of process control and critical systems.",
      imgCaptions: ["P470 8-channel benchtop thermocouple simulator", "P470 Caption 2", "P470 Caption 3", "P470 Caption 4"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Does the P470 come with software drivers?", "There is no need for software drivers because this unit comes equipped with Ethernet."],
        ["Can the P470 be set to output temperatures in degrees Fahrenheit?", "When the P470 is used in thermocouple mode, users may directly request temperatures in degrees Celsius, but not in degrees Fahrenheit."], 
        ["Can you provide a calibration procedure for the P470?", "Unfortunately, we do not have a calibration procedure that we can share because we use proprietary test software. We provide calibration services for all of our products, so the unit can be returned to us for factory calibration at any time."], 
      ]
      },


      // ****************************** P500 Data ******************************
      {
        name: "4-channel benchtop digital delay and pulse generator",
        model: "P500",
        category: ["DDG"],
        features: [
            ["4 delay and width pulse outputs A B C D and T0 start reference"], 
            ["Up to 1000 seconds delay with 1 picosecond resolution"],
            ["35 nanosecond insertion delay"],
            ["Less than 15 picoseconds RMS typical jitter"],
            ["14 MHz rep rate"],
            ["Custom GaN output stages make clean, fast 50-ohm pulses from 0.5 to 25 volts p-p"],
            ["User-friendly operation: color LCD, spinner knob, onboard help"],
            ["No timing errors, aborted pulses, or missed triggers during timing changes"],
            ["Optional isolated rear-panel high-voltage outputs"],
            ["Trains/frames option includes timing lists and multiple pulses per trigger"],
            ["Interfaces are USB, RS-232, and Ethernet with SCPI and web page controls"],
            ["Web page controls from any browser"],
        ],
        description: "Generates delays up to 1000 seconds in 1 picosecond increments, and is capable of a high repetition rate of 14 MHz.",
        imgCaptions: ["P500 4-channel benchtop digital delay and pulse generator", "P500 with Trigger Menu running", "", "", "P500 Standard Rear Panel (high voltage output option not installed)"],
        about: [
            "The P500 is a benchtop digital delay and pulse generator that generates four separately programmable delay-and-width outputs. The P500 can generate delays up to 1000 seconds in 1 picosecond increments, and is capable of a high repetition rate of 14 MHz. Applications for the P500 include laser timing, pulse picking, ICCD camera systems, ATE systems, and radar testing.",
            "P500 trigger sources include internal, external, remote, manual, or line. The low-jitter internal synthesized rate generator may be programmed from 0.001 Hz to 14 MHz in 1 mHz steps. The external trigger features selectable trigger level, slope, and termination impedance. Trigger gating and burst facilities are standard.",
            "The front panel includes a color LCD, numeric keypad, and spinner knob. Each function of the P500 has an intuitive single-level control menu invoked by an associated pushbutton. A HELP system explains each pushbutton, input, output, and setting.",
            "Remote interfaces include RS-232, USB, and Ethernet with both ASCII serial commands and web page controls.",
            "The standard P500 timebase is a precision temperature-compensated crystal oscillator. An optional OCXO is available for applications requiring extreme accuracy and lowest jitter. Multiple P500s may be synchronized to each other, or locked to an external 10 MHz reference.",
        ],
        related: [
          "P400 4-channel benchtop digital delay and pulse generator",
          "T560 4-channel compact digital delay and pulse generator",
          "T564 4-channel compact advanced digital delay and pulse train generator",
        ],
        specifications: [
          ["FUNCTION", ["Four channel digital delay/pulse generator"]],
          ["CHANNELS", ["T0 A B C D"]],
          ["OUTPUT VOLTAGES", ["Vlow ± 5 volts", "Vhi -5 to +20 volts", "Rise/fall < 1.5 ns typ", "Clean pulses from 0.5 to 25 volts p-p", "Zout 50 ohms (divide voltages by 2 into 50 ohm loads)",]],
          ["TIMING RANGE", ["Delay+Width 0-999 seconds relative to T0"]],
          ["INSERTION DELAY", ["Trigger to T0 output, 35 ns ± 500 ps"]],
          ["REP RATE", ["0 to 14 MHz limited to 1 / (max d+w + 70 ns)"]],
          ["ACCURACY", ["Trigger to rising or falling edges ± 500 ps ± timebase"]],
          ["RESOLUTION", ["Edge times, 1 ps", "Output levels, 0.1 V", "Trigger level, 10 mV"]],
          ["JITTER", ["< 15 ps RMS + timebase jitter, trigger to any output edge", "< 10 ps RMS + timebase jitter, T0 or channel to channel"]],
          ["TRIGGER", ["External, internal, software, manual, line", "Burst, divide-by-N, N-of-M pulse picking", "External trigger range ± 5 volts", ["rising/falling edge", "impedance selectable 2K + 15 pF or 50 ohms", "minimum recommended amplitude 0.25 volts p-p"], "Internal, 0 to 14 MHz", ["resolution 0.01 Hz", "period jitter < 10 ps RMS + timebase jitter"], "Line trigger requires external P492 adapter"]],
          ["TIMEBASE", ["Standard VCXO:", ["TC < 1 PPM/°C", "Jitter < 10 ns RMS/sec delay", "Aging < 1 PPM/year", "Lockable to external 10 MHz ± 10 PPM"], "Optional OCXO:", ["TC < 10 PPB/°C", "Jitter < 100 ps RMS/sec delay", "Aging < 100 PPB/year", "Lockable to external 10 MHz ± 2 PPM"]]],
          ["CLOCK INPUT", ["10 MHz, sine or square, 0.5 to 5 volts p-p 1K nom Zin"]],
          ["CLOCK OUTPUT", ["10 MHz, square wave, 50 ohms, 3 volts p-p AC coupled"]],
          ["COUNTDOWN", ["Provides trigger divide-by-N or N-of-M burst/pulse picker mode, up to 200 MHz external trigger"]],
          ["POWER", ["External 24 volts DC from universal adapter supplied", "Includes international plug adapters", "36 watts max"]],
          ["OPTIONAL HV OUT", ["Five isolated rear-panel outputs, T0 A B C D", "Delays/widths track channels A..D", "Voltage programmable 2-50 volts into 50 ohms", "Rise/fall < 2 ns", "Max pulse width 100 v-µs"]],
          ["COMMUNICATIONS", ["USB, 10/100 Ethernet, RS-232"]],
          ["DISPLAY", ['3.5" diagonal 320 x 240 color LCD, dimmable']],
          ["PACKAGING", ['13.5" x 8" x 4.63" aluminum enclosure (including connectors and feet)']],
          ["TEMPERATURE", ["Specifications apply over 10-40°C ambient", "Operating range -20 to 60°C"]],
          ["CONFORMANCE", ["RoHS"]],
          ["WARRANTY", ["2 years limited"]],
          ["OPTIONS", ["Rear-panel isolated HV outputs", "Frames: per-trigger delay/width lists", "Trains: multiple channel outputs per trigger", "OCXO timebase", "Rackmount adapter"]],
        ],
        // optionsOptional: [
        //       ["Advanced Features", [["2", "1", "advanced pulse train/frame generation"], ["2", "1", "50V isolated high-voltage output"],["2", "1", "high stability ovenized oscillator"]]],
        // ],
        optionsOptional: [
          "Advanced Features",
          [[1], [2, "high stability ovenized oscillator"]], // digit 1
          [[1], [2, "50V isolated high-voltage output"]], // digit 2
          [[1], [2, "advanced pulse train/frame generation"]], // digit 3
        ],
        accessories: [
          ["J25-1", "24 volt 65W power supply", "(1 included with purchase)"],
          ["J27-1", "2.1 x 5.5 mm barrel to pigtail power cable"],
          ["P10-1", '19" rack mount shelf (two p-boxes per rack)'],
          ["P492-1", "AC line triggering transformer for P400/P500"],
        ],
        FAQs: [
          ["What is the difference between the P400 and the P500?", "The Highland Model P500 Digital Delay/Pulse Generator is the successor of Model P400. We typically recommend purchasing the P500 over the P400 because it is less expensive, it has an improved user interface, and it will be supported for a very long time. The P400 design is over 10 years old and is being gradually phased out of our product offerings due to component obsolescence challenges. Some new features of the P500 include: improved packaging, color LCD, quiet fan, streamlined design, standard USB, Ethernet, and RS232, high performance pulse output stages with clean fast pulses from 0.5 to 25 volts p-p into 50 ohms, rep-rate to 14 MHz, glitch-free timing changes, and optional per-shot timing lists and multiple pulses per trigger."], 
        ]
      },

      // ****************************** P545 Data ******************************
      {
      name: "12-channel synchro / LVDT simulation / acquisition module",
      model: "P545",
      category: ["MAS"],
      features: [
        ["12 transformer-isolated AC sine wave generator/acquisition channels"],
        ["Generalized ADC-DAC-DSP architecture"],
        ["Programmable functions include:", 
          [
            "LVDT/RVDT acquisition, with internal or external excitation", 
            "LVDT/RVDT simulation, with internal or external excitation",
            "Synchro/resolver acquisition, with internal or external excitation",
            "Synchro/resolver simulation, with internal or external excitation",
            "Polyphase sine wave generation from 250 Hz to 20 kHz",
            "True RMS voltage measurement",
            "Synchronous detection",
            "Frequency measurement",
          ]
        ],
        ["Real-time voltage and frequency measurement, all signals in all modes"],
        ["16-bit ADC and DAC resolution"],
        ["Ethernet and USB-serial interfaces"],
        ["Generalized function block capability"],
        ["Internal ARM9 CPU performs macro functions"],
      ],
      description: "Sinewave processor intended for both simulation and acquisition of LVDTs, RVDTs, synchros, and resolvers.",
      imgCaptions: ["P545 Front/Signal Panel", "", "P545 Rear/Power Panel", ""],
      about: [
        "The P545 is a DSP-based sinewave processor intended for both simulation and acquisition of LVDTs, RVDTs, synchros, and resolvers. Twelve generalized, isolated channels are provided. Each channel can be a signal source or a measurement input. Users can program any desired relationship between input and output channels, allowing simulation and measurement of a wide range of inductive transducers, using internal or external excitation.",
        "Per-channel features include 1 VA sinewave generation to 32 volts RMS, RMS AC measurement, frequency measurement, programmable phase shift, and a versatile phase-sensitive detector."
      ],
      related: [
        "V545 24-channel VME synchro/LVDT simulation/acquisition module",
      ],
      specifications: [
        ["FUNCTION", ["12-channel LVDT/synchro/resolver simulation/acquisition module"]],
        ["I/O CHANNELS", ["12, transformer isolated, programmable input/output"]],
        ["VOLTAGE RANGES", ["0-32 VRMS in/out, programmable per channel", "Output 35 mA RMS per channel max", "Output THD -40 dBc typ, 250 Hz-10KHz", "Output impedance 80 ohms typ"]],
        ["RESOLUTION", ["16 bits"]],
        ["FREQUENCY RANGE", ["250 Hz to 20 kHz"]],
        ["OPERATING TEMPERATURE", ["0 to 60° C"]],
        ["CONNECTORS", ["One female D25 connector, channel I/O", "One female D9 connector, digital I/O"]],
        ["COMMUNICATIONS", ["USB serial port emulator, 115.2 kbaud;", "10/100 Ethernet"]],
        ["CALIBRATION INTERVAL", ["Two years"]],
        ["POWER", ["24 VDC, model J24 30 watt adapter furnished"]],
        ["PACKAGING", ['7.0" (L) x 8.5" (W) x 2.5" (H) benchtop/half-rack anodized aluminum enclosure', "Rack adapter available"]],
        ["INDICATORS", ["Power/CPU, COMM"]],
      ],
      specificationsTwo: [
        ["Accuracy"],
        ["VOLTAGE GENERATION", ["± 0.50% full scale at 300 Hz to 500 Hz"]],
        ["RMS VOLTAGE MEASUREMENT", ["± 1% full scale at 300 Hz to 500 Hz"]],
        ["FREQUENCY MEASUREMENT", ["0.05%"]],
        ["FREQUENCY GENERATION", ["0.05%"]],
      ],
      baseModel: "1",
      accessories: [
        ["J24-1", "24 volt 1.2 amp power supply ", "(furnished with purchase)"],
        ["J27-1", "2.1 x 5.5 mm barrel to pigtail power cable"],
        ["P10-1", '19" rack mount shelf (two p-boxes per rack)'],
        ["P51-1", "Mounting Flange"],
      ],
      },

      // ****************************** P620 Data ******************************
      {
      name: "6-channel isolated resistance simulator",
      model: "P620",
      category: ["MAS"],
      features: [
        ["6 channels of fully isolated precision resistance/RTD simulation"],
        ["True 4-wire resistance simulation on all channels"],
        ["Resistance programmable from 5Ω to 5MΩ in five ranges"],
        ["Programmable for 100Ω and 1kΩ platinum RTDs"],
        ["RTD mode accepts temperatures directly in Celsius"],
        ["Monotonic resistance changes allow for RTD simulation without transient errors"],
        ["Channels may be used in series or parallel for additional voltage and current capability"],
        ["Separate TEST port allows access to channels for in-system calibration check"],
        ["4 versatile digital input/outputs"],
        ["Built-in self-test (BIST)"],
        ["Ethernet and USB interfaces"],
        ["Access via serial ASCII commands or web interface"],
      ],
      description: "RTD and resistance simulator intended for system-level testing of process control systems, FADEC engine controllers, and other critical systems.",
      imgCaptions: ["", "P620 front/signal panel", "", "P620 rear/power panel", ""],
      about: [
        "The P620 is a standalone 6-channel RTD and resistance simulator. It is intended for system-level testing of process control systems, FADEC engine controllers, and other critical systems.",
        "Each independent, isolated channel can simulate common RTD types and six decades of resistance range. It uses entirely solid-state simulation to eliminate transient errors associated with relay switching, and provides for monotonic resistance changes. Channels can operate from millivolts up to 10V and 20mA. Overload protection and channel error detection are included.",
        "Any channel may be rerouted, under software control, to the front-panel calibration-check connector, allowing the board to be tested for calibration by a precision DVM without disturbing the connections to the equipment under test. The built-in self test provides an onboard ohmmeter, allowing loopback checking and fully automatic self-test.",
        "Both USB and Ethernet interfaces are provided. Control is via text commands or through the internal web page server. Only a web browser is needed to exercise all P620 functions, but the simple ASCII command set facilitates integration into user programs.",
        "Four versatile digital I/O ports are provided, each CMOS/TTL compatible and capable of driving relays or LEDs."
      ],
      related: [
        "V420 8-channel VME isolated resistance simulator",
      ],
      specifications: [
        ["FUNCTION", ["6-channel isolated resistance simulator"]],
        ["RESISTANCE SIMULATION RANGES", ["Standard resistance ranges:", ["R5 5Ω to 500Ω", "R50 50Ω to 5kΩ", "R500 500Ω to 50kΩ", "R5K 5kΩ to 500kΩ", "R50K 50kΩ to 5MΩ"], "Platinum RTD types:", ["R385 -125°C to 700°C 100Ω Pt 385", "K385 -125°C to 700°C 1kΩ Pt 385", "R392 -125°C to 650°C 100Ω Pt 392", "K392 -125°C to 650°C 1kΩ Pt 392"]]],
        ["OUTPUT RESOLUTION", ["Standard resistance ranges: Variable from 9-15 bits with higher resolution at the lower end of the range (see manual section 6.1 for details)", "RTD ranges: Better than 0.05°C"]],
        ["INPUT OPERATING RANGE", ["±10 V differential, ±20 mA"]],
        ["OUTPUT PROTECTION", ["±30 V differential", "±750 V common-mode", "ESD to 5 kV, human body model"]],
        ["DIGITAL INPUT/OUTPUT", ["4 DIO channels, TTL/CMOS compatible", "Outputs can sink up to 32 volts at 250 mA", "Direct LED drive",]],
        ["CONNECTORS", ["D25 female for 6 channels", "D9 male for test", "D9 female for DIO", "1 securable power barrel connector"]],
        ["PACKAGING", ['7.0" (L) x 8.5" (W) x 2.25" (H) Aluminum enclosure']],
        ["INDICATORS", ["LEDs indicate Ethernet/Serial access, CPU activity, error conditions", "Additional user programmable LED"]],
        ["COMMUNICATIONS", ["10/100 Ethernet, USB"]],
        ["OPERATING TEMPERATURE", ["0 to 70°C"]],
        ["CALIBRATION INTERVAL", ["One year"]],
        ["POWER", ["24 volts DC, 500mA max", "model J24, 24 VDC, 30 watt external adapter furnished", "2.1 x 5.5 mm barrel connector, center pin positive",]],
        ["CONFORMANCE", ["DIN 43760"]],
      ],
      specificationsMulti: [
        ["Resistance Output Accuracy"],
        ["OUTPUT", "TYPICAL", "LIMIT 15-35°C (note 1)", "LIMIT 0-70°C"],
        ["100Ω (note 2), 1kΩ (note 3) RTD,-125°C to 250°C (note 4)", "±0.05°C", "±0.25°C", "±0.7°C"],
        ["Resistance 1x to 20x of base resistance", ["R5-R5K (note 5): ± 0.1%", "R50K (note 6): ±0.25%"], ["±0.4%", "±1.0%",], ["±1.25%", "±4%"],],
      ],
      specificationsNotes: [
        ["Note 1: ", "P620 ambient temperature"],
        ["Note 2: ", "1mA minimum test current"],
        ["Note 3: ", "100µA minimum test current"],
        ["Note 4: ", "Simulated RTD Temperature"],
        ["Note 5: ", "10mV minimum test voltage"],
        ["Note 6: ", "100mV minimum test voltage"],
        ["", "For a more in-depth discussion of accuracy, see manual section 6."]
      ],
      baseModel: "1",
      accessories: [
        ["J24-1", "24 volt 1.2 amp power supply", "(furnished with purchase)"],
        ["J27-1", "2.1 x 5.5 mm barrel to pigtail power cable"],
        ["J55-1", "6′ shielded D25 male to D25 male cable"],
        ["J56-1", "10′ shielded D25 male to D25 male cable"],
        ["J75-1", "D9 female to two(2) dual banana plug cable"],
        ["J475-1", '8-channel D25 female Din rail termination panel'],
        ["P10-1", '19" rack mount shelf (two p-boxes per rack)'],
        ["P51-1", "Mounting Flange"],
      ],
      FAQs: [
        ["Does the P620 come with software drivers?", "There is no need for software drivers because this unit comes equipped with Ethernet."],
      ]
      },

      // ****************************** P730 Data ******************************
      {
      name: "dual 1:4 benchtop optical-to-electrical fanout buffer",
      model: "P730",
      category: ["LEG"],
      features: [
        ["DC coupled electrical inputs are usable up to 1 Gbps"],
        ["Input-to-output bank assignment is routable without moving cabling"],
        ["Programmable logic in thresholds (-4 V to +4 V) can be set independently per input"],
        ["Programmable logic out voltages (-3.6 V to +5 V, 50 Ω source) can be set independently per output bank"],
        ["Insertion delay is under 3 nanoseconds, with random jitter less than or equal to 12 picoseconds RMS"],
        ["Comes in sturdy anodized aluminum enclosure with optional mounting flanges for extra security    "],
        ["Expanded input-to-output bank assignment architecture allows user-configurable routing of either electrical or optical input to either output bank"],
        ["Independent optical thresholds with front panel accessible test points"],
        ["Monitor outputs provide analog verification of optical signal integrity and power measurement"],
      ],
      description: "Converts two fast fiber-coupled laser signals to two user-routable output banks, each consisting of four parallel buffered electrical outputs.",
      imgCaptions: ["", "P730 front/signal panel", "", "P730 rear/power panel"],
      about: [
        "The P730 is a high-speed, multipurpose digital fanout buffer housed in an anodized aluminum enclosure, which may be surface-mounted for OEM use or placed on a bench top for lab use.",
        "The P730 features two input banks that are user-routable to two output banks, each consisting of four parallel buffered electrical outputs. Input and output levels are independently adjustable enabling compatibility with CMOS, TTL, LVDS, NECL, PECL, NIM and sine wave systems. Fiberoptic inputs are optionally available, expanding electrical signal translation to include optical-to-electrical conversion and galvanic isolation. A fully DC-coupled signal path maintains signal integrity to greater than 500 MHz pulse repetition rates.",
        "The P730 is compatible with Highland's photonics, timing, benchtop, and VME products.",
      ],
      related: [
        "J720 single-channel compact electrical-to-fiberoptic converter",
        "J724 single-channel compact buffered electrical-to-fiberoptic converter",
        "T860 single-channel compact logic buffer and driver",
      ],
      specifications: [
        ["FUNCTION", ["1:8 or dual 1:4 universal fanout"]],
        ["INPUTS", ["Electrical input voltage range (E0, E1): +6 V to -4 V (50 Ω termination)", "Optional optical input range (F0, F1): 0 µW to 2 mW",]],
        ["INPUT THRESHOLDS", ["Electrical: ±4 V", "Optical: 500 µW to 2 mW, typical",]],
        ["PROPAGATION DELAY", ["3 ns, typical"]],
        ["OUTPUTS", ["Two independent banks of four outputs each (X0-X3, Y0-Y3)", "Unloaded output voltage: +5 V, maximum", "Unloaded output voltage: -3.6 V, minimum", "Unloaded output swing: 5 V peak to peak, maximum", "Source impedance: 50 Ω"]],
        ["MONITOR OUTPUT", ["Optical monitor scaling: 100 mV/mW ±10% into 50 Ω", "Source impedance: 50 Ω"]],
        ["BANDWIDTH", ["500 MHz analog, 1 Gb/s NRZ"]],
        ["RISETIME", ["≤ 500 ps"]],
        ["FALLTIME", ["≤ 500 ps"]],
        ["JITTER", ["≤ 12 ps RMS"]],
        ["OUTPUT SKEW", ["Within Bank: < 800 ps", "Bank X to Bank Y: < 1 ns"]],
        ["MINIMUM PULSE WIDTH", ["≥ 750 ps"]],
        ["OPERATING TEMPERATURE", ["0 to 60°C; extended MIL/COTS ranges available"]],
        ["CALIBRATION INTERVAL", ["One year"]],
        ["POWER", ["+15 V to +24 V, 26 Watts, typical", "Highland Technology J24 Universal AC adapter supplied"]],
        ["CONNECTORS", ["ST optical input receptacles", "Gold plated SMB electrical inputs, electrical outputs and optical monitor outputs", "2.1 mm X 5.5 mm barrel power connector"]],
        ["INDICATORS", ["LEDS: Green power, blue channel triggers"]],
        ["PACKAGING", ['5.0" (L) x 7.0" (W) x 2.25" (H) anodized aluminum enclosure']],
        ["CONFORMANCE", ["Designed to meet UL/FCC/CE requirements"]],
      ],
      optionsRequired: [
        ["Wavelength", [["1", "850 nm"], ["3", "1310 nm"], ["5", "1550 nm"]]],
      ],
      accessories: [
        ["J24-1", "24 volt 1.2 amp power supply", "(furnished with purchase)"],
        ["J41-1", "3' SMB to SMB cable"],
        ["J41-2", '6" SMB to SMB cable'],
        ["J42-1", "3′ SMB to SMA cable"],
        ["J53-1", "3' SMB to BNC cable"],
        ["J53-2", '6" SMB to BNC cable'],
        ["P10-1", '19" rack mount shelf (two p-boxes per rack)'],
      ],
      EOL: ["April 1, 2023", "April 1, 2027", 24],
      },

      // ****************************** P900 Data ******************************
      {
      name: "3-phase power source and permanent-magnet alternator simulator",
      model: "P900",
      category: ["MAS"],
      features: [],
      description: "Powers shunt/chopper type voltage regulators in jet engine controller FADECs and other aircraft equipment.",
      imgCaptions: ["P900 3-phase power source and permanent-magnet alternator simulator"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T124 Data ******************************
      {
      name: "1 to 4 logic buffer",
      model: "T124",
      category: ["PSG"],
      features: [],
      description: "Provides a fast 1 to 4 fanout buffer/inverter for digital logic signals.",
      imgCaptions: ["T124 1 to 4 logic buffer"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T130 Data ******************************
      {
      name: "single-channel picosecond EOM driver",
      model: "T130",
      category: ["PSG", "PHO"],
      features: [],
      description: "Externally-triggered pulse generator, suitable for driving 50Ω Mach-Zehnder LiNBO3 electro-optical type devices.",
      imgCaptions: ["T130 single-channel picosecond EOM driver", "T130 Caption 2", "T130 Caption 3", "T130 Caption 4"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T160 Data ******************************
      {
      name: "picosecond to nanosecond laser diode driver",
      model: "T160",
      category: ["LDC"],
      features: [],
      description: "Accepts LVDS or TTL logic inputs, and laser drive pulse width follows the input waveform.",
      imgCaptions: ["T160 picosecond to nanosecond laser diode driver"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Is the 4-pin micro USB on the T160 the control and power?", "The micro USB jack is only utilized for +5V power in."],
        ["What is the difference between the T160 and T165?", "Both the T160 and T165 require an external trigger source; however, the T160 is a logic follower that routes current to the laser for the duration of the input source. The T165 has a built-in ‘one shot’, enabling the formation of adjustable output current pulses when fed an arbitrarily wide input trigger. Both are AC-coupled, and have duty limits. The T160 is better suited for applications requiring pulse widths beyond hundreds of nanoseconds. Both T160 and T165 utilize the same switched current sink output topology, as shown in the block diagrams, with similar switching dynamics. Both require that drive path inductance remain very low for fast falling edges."], 
      ]
      },

      // ****************************** T165 Data ******************************
      {
      name: "picosecond to nanosecond laser diode pulser",
      model: "T165",
      category: ["LDC"],
      features: [
        ["Edge-triggered pulse, user adjustable width"],
        ["Optical pulse widths from 100 picoseconds to 850 nanoseconds"],
        ["Laser pulse current up to 400 mA, 700 mA with heat sinking"],
        ["Pin socket connection to Type-1 butterfly-packaged laser diodes with floating anode; compatible with other diode packages"],
        ["Highly stable constant-current laser drive"],
        ["Laser current, bias, and pulse widths are settable with onboard trimpots or by external analog inputs"],
        ["Accepts LVTTL or LVCMOS trigger levels"],
        ["Powered by standard 10 Watt, 5-volt micro-USB power supply or through ribbon cable interface connector"],
        ['2" x 2" PCB for embedded application'],
      ],
      description: "Combines a picosecond class pulse width generator with a precision laser diode driver.",
      imgCaptions: ["T165 installed on mounting flange (standard for evaluation versions)", "T165 installed on mounting flange (standard for evaluation versions)", "board-only T165 (unmounted for system integration)"],
      about: [
        'The T165 Laser Pulser incorporates an edge triggered pulse generator with fast rise and fall times into a butterfly or TO-packaged laser. The 2" by 2" design connects directly to standard 0.1" pin-pitch butterfly laser packages, making it ideal for OEM use in laser systems.',
        "The T165 offers easily adjustable current, bias, and pulse width settings. It is compatible with several Highland Technology digital delay and pulse generators, including the P500 and T560 digital delay and pulse generators.",
        "For a laser driver without a built-in pulse generator, see the T160 picosecond to nanosecond laser diode driver."
      ],
      related: [
        "D200 diode laser driver",
        "P500 4-channel benchtop digital delay and pulse generator",
        "T160 picosecond to nanosecond laser diode driver",
        "T560 4-channel compact digital delay and pulse generator"
      ],
      specifications: [
        ["FUNCTION", ["Embedded pulse generator and laser diode driver"]],
        ["TRIGGER INPUT", ["LVTTL/LVCMOS input", "Triggers on input rising-edge, max input: +2.5 volts", "min trigger width:", ["2.5 ns (-2 and -9 versions)", "250 ns + width program setting (-12 thru -15 versions)"], "Trigger rate:", ["0 to 200 MHz (-2 and -9 versions)", "0 to 2 MHz (-12 thru -15 versions)"]]],
        ["PROPAGATION DELAY", ["4 ns nominal (-2 and -9 versions)", "250 ns nominal (-12 thru -15 versions)"]],
        ["LASER OUTPUT", ["Pulsed laser current adjustable 0 to 700 mA, + 2.5 volt compliance", "Heat sinking required above 400 mA", "Average laser current 50 mA max", "Width adjustable from:", ["< 300 ps to 2 ns, nominal (-2 and -9 versions)", "< 5 ns to 850 ns, nominal (-12 and -13 versions)", "< 5 ns to 850 ns, nominal (-14 and -15 versions) "]]],
        ["RISE/FALL TIMES", ["150 ps to 1 ns nominal (-2 thru -13 versions)", "2.5 ns nominal (-14 and -15 versions)", "Actual rise/fall times depend on laser electrical parasitics"]],
        ["JITTER", ["< 12 ps RMS (-2 and -9 versions)", "< 120 ps RMS (-12 thru -15 versions)"]],
        ["CONTROL", ["Three trimpots or external analog inputs set laser ON current, laser OFF bias voltage, pulse width", "External inputs are 0 to +3 volts, > 10 KΩ load"]],
        ["BIAS RANGE", ["-1.2 V to +1.2 V, nominal, laser cathode relative to anode, ground referenced"]],
        ["POWER", ["+5 volts ± 5% at PCB via USB connector or ribbon header", "Current 300 mA plus laser current", "Highland model J6 USB power supply available for use up to 700 mA laser current (furnished with evaluation versions only)"]],
        ["CONNECTORS", ["LVTTL input: SMB connector", "Control and power: 10-pin 50-mil 2x5 ribbon header", "MONITOR output: SMB connector", "Micro-B USB alternate power connector", "3-pin header provides access to laser TEC pins"]],
        ["LED INDICATORS", ["Orange POWER"]],
        ["PACKAGING", ['2" x 2" printed circuit board']],
      ],
      optionsRequired: [   
        ["configuration", [
          ["2", "picosecond laser diode pulser (board-only)"], 
          ["9", "picosecond laser diode pulser evaluation kit (furnished on butterfly laser mounting flange with power supply and two 3' SMB to BNC cables)"], 
          ["12", "picosecond laser diode pulser with LVTTL trigger and output pulse widths extended to 850 nanoseconds (board-only)"],
          ["13", "picosecond laser diode pulser with extended pulse width range evaluation kit (furnished on butterfly laser mounting flange with power supply and two 3' SMB to BNC cables)"],
          ["14", "nanosecond laser diode pulser with LVTTL trigger and output pulse widths extended to 850 nanoseconds (board-only)"],
          ["15", "nanosecond laser diode pulser with extended pulse width range evaluation kit (furnished on butterfly laser mounting flange with power supply and two 3' SMB to BNC cables)"],
        ]],
      ],
      accessories: [
        ["J6-1", "5 volt USB power supply", "(furnished with evaluation kit purchase)"],
        ["J53-1", "3′ SMB to BNC cable", "(two furnished with evaluation kit purchase)"],
        ["T163-1", "Butterfly laser driver mounting flange ", "(furnished with evaluation kit purchase/must be installed at factory)"],
      ],
      FAQs: [
        ["What type of laser is best to use with the T165?", "The T165 pinout is designed to interface with 14-pin butterfly lasers that have the anode on pin-10 and the cathode on pin-9 and/or pin-11, sometimes referred to as Type-1."],
        ["Do you sell laser diodes?", "We do not sell or manufacture laser diodes; rather, we build the driver and leave it up to the application to determine the laser. Photodigm is the recommended laser vendor for customers looking for fast, gain-switched impulses."],
        ["Can you recommend a laser to use with your laser drivers?", "The T165 can drive laser diodes with forward voltages up to 3V and laser drive currents up to 700mA. We've done some gain switched experiments with Photodigm 1064 DBR butterfly lasers, and do recommend Photodigm as a laser vendor for customers looking for fast, gain-switched impulses. Beyond Photodigm, we have no had an opportunity to evaluate other laser manufacturers, but are open to do further evaluation if the laser can be provided to Highland for testing."],
        ["Is the T165 available with a temperature controller option?", "The T165 does not include an onboard temperature controller option; however, provisions are made to allow for connecting one. The T165 is very high-speed, so the interface requires that the laser be physically close to avoid anomalies due to circuit parasitics. The T165 is designed to interface with one side of a butterfly laser, pins 8 - 14; Typically, the TEC '-' connection is made at pin 14. The T165 includes a 3-pin male header that has one of its pins connect to pin 14 on the butterfly. The TEC '+' connection for a typical butterfly is on Pin 1 (the side that is not connected at all to the T165), so it would be directly connected to the TEC controller."],
        ["Do I need a cooling device for the T165 laser pulser?", "A fan or other cooling device is not necessary for the evaluation kit versions. It comes with an aluminum baseplate that should keep the T165 at a safe operating temperature in a standard lab environment."],
        ["What is the range of the pulse repetition rate for the T165?", "While the T165 drive current can be set as high as 700 mA, the average current is not to exceed 50 mA, constrained by an absolute maximum 40% duty cycle limit. Table 3 in the T165 technical manual correlates maximum pulse repetition rate (PRR) as a function of laser drive current and width."],
        ["What is the pulse width range of the T165?", "Depending on the version, the effective electrical pulse width range is 0 to 2.5ns for the T165-9, and 0 to 850ns for the T165-13 or T165-15. Narrow width pulses are best handled by the T165-9, as the 850ns wide-range versions trade resolution for span."],
        ["What is the difference between the T160 and T165?", "Both the T160 and T165 require an external trigger source; however, the T160 is a logic follower that routes current to the laser for the duration of the input source. The T165 has a built-in ‘one shot’, enabling the formation of adjustable output current pulses when fed an arbitrarily wide input trigger. Both are AC-coupled, and have duty limits. The T160 is better suited for applications requiring pulse widths beyond hundreds of nanoseconds. Both T160 and T165 utilize the same switched current sink output topology, as shown in the block diagrams, with similar switching dynamics. Both require that drive path inductance remain very low for fast falling edges."], 
      ]
      },

      // ****************************** T240 Data ******************************
      {
      name: "single-channel externally-triggered complementary-output pulse generator",
      model: "T240",
      category: ["PSG", "LDC", "PHO"],
      features: [],
      description: "Generates fast complementary pulse outputs with external triggering and programmable amplitude, width, and delay.",
      imgCaptions: ["T240 single-channel externally-triggered complementary-output pulse generator"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Can the T240 operate without an external trigger?", "The T240 won't operate without an external trigger. Any conventional RF or function generator can trigger it, including digital delay generators and arbitrary waveform generators products available from Highland. Period jitter will be determined by the generator."], 
        [" Does the T240 have a programmable PRF?", "No, the T240 will need an external PRF source as a trigger."],
      ]
      },

      // ****************************** T340 Data ******************************
      {
      name: "4-channel compact function generator",
      model: "T340",
      category: ["WFG"],
      features: [],
      description: "Provides four DDS waveform outputs, each programmable for frequency and amplitude. Synchronizable in any combination of channels to produce polyphase signals.",
      imgCaptions: ["T340 4-channel compact function generator", "", "T340 signal endplate", "T340 version -1 power endplate (without Ethernet)", "T340 version -2 power endplate (with Ethernet)"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T344 Data ******************************
      {
      name: "4-channel compact 32 MHz arbitrary waveform generator",
      model: "T344",
      category: ["WFG"],
      features: [],
      description: "Generates four independently programmable waveforms with standard functions, noise, and user-loaded arbitrary waveforms.",
      imgCaptions: ["T344 4-channel compact 32 MHz arbitrary waveform generator"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T346 Data ******************************
      {
      name: "4-channel compact 32 MHz arbitrary waveform generator w/ complex modulation",
      model: "T346",
      category: ["WFG"], 
      features: [],
      description: "Generates sweeps, chirps, I/Q and constellations, and calibrated jitter, and simulates a wide range of radar, communications, power, encoders, and electro-mechanical systems.",
      imgCaptions: ["T346 4-channel compact 32 MHz arbitrary waveform generator w/ complex modulation", "", "", "T346 signal endplate", "T346 power endplate"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Where can I find the test program for the T346?", "The program can be downloaded from Dropbox. A link is provided in the Resources menu under Drivers & Software. The Dropbox repository contains both the source code and the executable, which is under the dist folder. You'll need Java to run it, and there are instructions in the dist/README.TXT about installing librxtxserial."], 
      ]
      },

      // ****************************** T400 Data ******************************
      {
      name: "precision laser modulator system",
      model: "T400",
      category: ["OEM"],
      features: [],
      description: "Integrated beam-profile modulator for large-scale fusion and other high-energy laser installations.",
      imgCaptions: ["T400 precision laser modulator system"],
      about: [],
      related: [],
      specifications: [],
      },


      // ****************************** T560 Data ******************************
      {
        name: "4-channel benchtop digital delay and pulse generator",
        model: "T560",
        category: ["DDG", "LDC"],
        features: [
            ["Four TTL-level delay outputs, individually programmable for delay and pulse width"], 
            ["10 picosecond delay and width resolution, 10 second range"],
            ["21 nanosecond insertion delay, 16 MHz max trigger rate"],
            ["Low jitter, highly accurate DSP phaselock system provides crystal-clock delay accuracy with zero indeterminancy from external trigger"],
            ["Internal crystal oscillator timebase with external lock capability"],
            ["DDS synthesizer for internal trigger rates"],
            ["External universal power supply or 12-volt DC power"],
            ["RS-232 serial interface standard; Ethernet optional"],
            ["OEM packaged or board-only custom versions available"],
        ],
        description: "Accepts an internal or external trigger and generates four precise output pulses, each user programmable in time delay and width.",
        imgCaptions: ["T560 4-channel benchtop digital delay and pulse generator", "", "", "", "T560 signal endplate", "T560 version -1 power endplate (without Ethernet)", "T560 version -2 power endplate (with Ethernet)"],
        about: [
            "The T560 series is a family of small digital delay generators, intended for use in embedded OEM applications. The T560-1 is the standard, packaged version, usable in many OEM applications and as the evaluation unit for custom versions. It uses the technology developed for the Highland model V851 (VME module) and P400 (benchtop) digital delay generators, with basic TTL/CMOS input and output levels and advanced logic.",
            "The T560 accepts an internal or external trigger and generates four precise output pulses, each user programmable in time delay and width. It is ideal for laser sequencing, radar/lidar simulation, or sequential event triggering. It is easily mounted within systems enclosures, allowing short cable runs and reliable, unattended operation.",
            "Because of its low 20 nanosecond insertion delay, the T560 is ideal for timing and gating lasers, Q-switches, ICCDs, and other electro-optical devices, and for applying picosecond-resolution time trims to nuclear, radar, and sonar cabling and instrumentation.",
            "The T750 4-channel high-voltage driver is available to extend T560 outputs to as high as 100 volts.",
        ],
        related: [
          "P500 4-channel benchtop digital delay and pulse generator",
          "T564 4-channel compact advanced digital delay and pulse train generator",
          "V850 4-channel VME digital delay/pulse generator",
          "V851 6-channel VME digital delay/pulse generator",
        ],
        specifications: [],
        optionsRequired: [],
        optionsOptional: [],
        accessories: [],
        driversSoftware: [
          ["Demo Software", "https://www.Dropbox.com/s/g4wto8k0ph97bx8/DemoSW.zip?dl=0"],
        ],
        FAQs: [
          ["Where can I find the demo software for the T560?", "The software can be downloaded from Dropbox. A link is provided in the Resources menu under Drivers & Software."], 
          ["Should I use the demo software to communicate with the T560?", "In general, Highland no longer recommends the use of the T560 demo software. We are not able to provide support for it and it seems to have problems communicating on newer versions of Windows. It's easier to use a serial port program such as TeraTerm or PuTTY. Extensive instructions on communicating with the T560 can be found in the technical manual."],
          ["Is it possible to drive the T560 using LabView?", "While we don't provide any LabView support, you can use LabView to communicate with the T560 and create your own driver."],
        ]
      },

      // ****************************** T564 Data ******************************
      {
        name: "4-channel compact advanced digital delay and pulse train generator",
        model: "T564",
        category: ["DDG", "LDC"],
        features: [
            ["Four TTL-level delay outputs, individually programmable for delay and pulse width range up to 10 seconds with 10 picosecond resolution"], 
            ["Low 20 nanosecond insertion delay"],
            ["Scenario generation for changing delay programs automatically"],
            ["Pulse train generation creates unlimited number of pulses from a single trigger"],
            ["Queue command programs new timings without disturbing ongoing triggers"],
            ["DSP phaselock system maintains crystal-clock accuracy and jitter for any delay length; parts per trillion drift using external 10 MHz reference"],
            ["DDS synthesizer for internal trigger rates to 16 MHz"],
            ["Programmable-level trigger input with divide/burst features and trigger GATE input"],
            ["RS-232 serial interface standard; Ethernet optional"],
            ["OEM packaged or board-only custom versions available"],
        ],
        description: "Allows a scenario of more than 8000 frames to be preloaded and then executed in rapid succession, advancing automatically as triggers are received.",
        imgCaptions: ["T564 4-channel compact advanced digital delay and pulse train generator", "", "T564-1 version without Ethernet", "T564-2 version with Ethernet"],
        about: [
            "The T560 series is a family of small digital delay generators, intended for use in embedded OEM applications.",
            "The T564 extends the capabilities of Highland's original T560 digital delay generator, allowing not only a single delay program, but a scenario of more than 8000 frames to be preloaded and then executed in rapid succession. Frames can be advanced automatically as triggers are received or simply stored and recalled manually. Each trigger generates four precise pulse outputs, independently programmable with 10 picosecond resolution in both delay and width. The T564 can generate single pulses per trigger as a standard digital delay generator or, new to the T560 DDG family, pulse trains. The Queue function allows new timing settings to be installed without disturbing ongoing cycles or missing triggers.",
            "With the same low 20 nanosecond insertion delay and 20 picosecond jitter as the T560, the T564 is ideal for timing and gating lasers, Q-switches, ICCDs, and other electro-optical devices, and for applying picosecond-resolution time trims to nuclear, radar, and sonar cabling and instrumentation. Additionally, the scenario capability allows moving target simulation in radar/sonar/lidar applications and sliding timing windows for margin testing - all with a form factor smaller than a paperback, with easy RS-232 or optional Ethernet control.",
            "Custom versions are readily available for OEM customers.",
        ],
        related: [
          "P500 4-channel benchtop digital delay and pulse generator",
          "T560 4-channel compact digital delay and pulse generator",
          "V850 4-channel VME digital delay/pulse generator",
          "V851 6-channel VME digital delay/pulse generator",
        ],
        specifications: [],
        optionsRequired: [],
        optionsOptional: [],
        accessories: [],
      },

      // ****************************** T680 Data ******************************
      {
      name: "5-channel ethernet time interval counter",
      model: "T680",
      category: ["PSG", "MAS"],
      features: [],
      description: "Five wide-range time stampers can snapshot the time of the rising edge of one electrical input.",
      imgCaptions: ["T680 5-channel ethernet time interval counter"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T735 Data ******************************
      {
      name: "compact DC-coupled optical-to-RS-422/RS-485/LVDS converter",
      model: "T735",
      category: ["PHO"],
      features: [],
      description: "Converts fiberoptic input to electrical logic-level outputs, with DC coupled logic and monitor paths.",
      imgCaptions: ["T735 compact DC-coupled optical-to-RS-422/RS-485/LVDS converter"],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Connector Outputs",[[null, "dual RS422/485"], ["1", "dual LVDS"]]],    
        ["Wavelength", [["3", "1310 nm"], ["5", "1550 nm"]]],
      ],
      },

      // ****************************** T750 Data ******************************
      {
      name: "4-channel compact high-voltage driver",
      model: "T750",
      category: ["PSG"],
      features: [],
      description: "Adjustable global logic level input/output levels accept LVDS, TTL, LVTTL, and LVPECL trigger, and output clean, flat pulses from an input comparator and a transformer-coupled HV power output stage.",
      imgCaptions: ["T750 4-channel compact high-voltage driver"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T760 Data ******************************
      {
      name: "dual-channel compact high voltage optical-to-electrical converter",
      model: "T760",
      category: ["PSG", "PHO"],
      features: [],
      description: "Converts two digital fiberoptic inputs into high-level isolated electrical pulse outputs.",
      imgCaptions: ["T760 dual-channel compact high voltage optical-to-electrical converter"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T840 Data ******************************
      {
      name: "2-channel high voltage driver",
      model: "T840",
      category: ["PSG", "PHO"],
      features: [],
      description: "Drives PLZT electro-optical modulators, piezo elements, vacuum photo devices, and similar capacitive loads.",
      imgCaptions: ["T840 2-channel high voltage driver"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T850 Data ******************************
      {
      name: "compact pockels cell driver",
      model: "T850",
      category: ["PSG", "PHO"],
      features: [],
      description: "Complementary standard and custom timing controllers can manage pulse picking, Q-switching, chirped pulse amplification, cavity dumping, and two-photon microscopy.",
      imgCaptions: ["T850 compact pockels cell driver"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T860 Data ******************************
      {
      name: "single-channel compact logic buffer and driver",
      model: "T860",
      category: ["PSG", "PHO"],
      features: [],
      description: "Incorporates a differential-input comparator and an output driver stage which has adjustable low and high levels and 50 ohm output impedance.",
      imgCaptions: ["T860 single-channel compact logic buffer and driver", "version -1 with SMA connectors", "version -1 with SMA connectors", "version -2 with SMB connectors", "version -2 with SMB connectors"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T900 Data ******************************
      {
      name: "laser timing unit",
      model: "T900",
      category: ["OEM"],
      features: [],
      description: "Manages high-rate laser timing on a shot-by-shot basis, with picosecond resolution of both laser system drive and photodiode diagnostics.",
      imgCaptions: ["T900 laser timing unit"],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V120 Data ******************************
      {
      name: "VME PCI express crate controller",
      model: "V120",
      category: ["VME", "MAS"],
      features: [],
      description: "VME bus master crate controller, usable as a crate slot 0 arbiter or as a secondary controller.",
      imgCaptions: ["V120 VME PCI express crate controller"],
      about: [],
      related: [],
      specifications: [],
      optionsOptional: [
            "Advanced Features",
            [[1], [2, "BIST"], [3, "test"]], // digit 1
            [[null], [1, "Conformal Coating"]], // digit 2
      ],
      accessories: [],
      FAQs: [
        ["Does the V120 come with OS support?", "We provide a fully open-source Linux driver as well as C libraries and some command line applications. See resources tab for link to download drivers."], 
        ["Do you sell an optical cable with the V120?", "We do not sell a fiber-optic link for the V120, but we have successfully tested it with "],
        ["What type of software support do you provide?", "A Linux driver and API support are available for the V120."],
        ["Where can I download the V120 driver to use it with Linux?", "The driver can be downloaded from GitHub. A link is provided in the Resources menu under Drivers & Software."],
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V124 Data ******************************
      {
      name: "VXI PCI express crate controller",
      model: "V124",
      category: ["VME", "MAS"],
      features: [],
      description: "VXI bus master crate controller, usable as a crate slot 0 arbiter or as a secondary controller.",
      imgCaptions: ["V124 VXI PCI express crate controller"],
      about: [],
      related: [],
      specifications: [],
      optionsOptional: [
        ["Advanced Features", [["21", "1", "Conformal coating"], ]],
      ],
      accessories: [],
      FAQs: [
        ["Does the V124 come with OS support?", "We provide a fully open-source Linux driver as well as C libraries and some command line applications. See resources tab for link to download drivers."], 
        ["Do you sell an optical cable with the V124?", "We do not sell a fiber-optic link for the V124, but we have successfully tested it with"],
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["What type of software support do you provide?", "A Linux driver and API support are available for the V120. Links are provided in the Resources menu under Drivers & Software. "]
      ],
      },

      // ****************************** V180 Data ******************************
      {
      name: "16-channel VME AC power analysis module",
      model: "V180",
      category: ["VME", "MAS"],
      features: [],
      description: "Allows accurate and comprehensive measurement of AC power circuits by acquiring powerline current and voltage inputs.",
      imgCaptions: ["V180 16-channel VME AC power analysis module"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V210 Data ******************************
      {
      name: "64-channel VME relay module",
      model: "V210",
      category: ["VME", "MAS"],
      features: [],
      description: "VME-2210 compatible relay module includes 64 SPDT relays and drivers, user-configured to operate in static or latching modes.",
      imgCaptions: ["V210 64-channel VME relay module"],
      about: [],
      related: [],
      specifications: [],
      optionsOptional: [
        ["Advanced Features", [["11", "1", "Conformal coating"], ]],
      ],
      accessories: [],
      FAQs: [
        ["Where can I find instructions for controlling the V210?", "Documentation on controlling the V210 can be found in the V210 technical manual. To drive relays, both the appropriate bank control bit in the CSR register and the channel control bit in the CTL0-CTL3 registers must be set."], 
        ["Is the V210 a drop in replacement for the VMIVME-2210?", "Yes, the Highland V210 64-channel VME relay module is fully compatible with all versions of the VMIVME-2210."],
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ]
      },

      // ****************************** V220 Data ******************************
      {
      name: "12-channel VME current loop/process control I/O module",
      model: "V220",
      category: ["VME", "MAS"],
      features: [],
      description: "Drives and senses transducers in computer or PLC-based control systems, and simulates complex industrial processes.",
      imgCaptions: ["V220 12-channel VME current loop/process control I/O module"],
      about: [],
      related: [],
      specifications: [],
      optionsOptional: [
        ["Advanced Features", [["2", "1", "Built-in self-test (BIST)"], ]],
      ],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V230 Data ******************************
      {
      name: "64-channel VME analog input module",
      model: "V230",
      category: ["VME", "MAS"],
      features: [],
      description: "VME-3122 compatible analog input module provides high channel-count data acquisition for dense monitoring applications.",
      imgCaptions: ["V230 64-channel VME analog input module"],
      about: [],
      related: [],
      specifications: [],
      optionsOptional: [
        ["Advanced Features", [["2", "1", "Built-in self-test (BIST)"], ["1", null, "Conformal coating"]]],
      ],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V250 Data ******************************
      {
      name: "64-channel VME digital input/output module",
      model: "V250",
      category: ["VME", "MAS"],
      features: [],
      description: "Provides 64 non-isolated channels of digital input/output.",
      imgCaptions: ["V250 64-channel VME digital input/output module"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V280 Data ******************************
      {
      name: "48-channel VME isolated digital input module",
      model: "V280",
      category: ["VME", "MAS"],
      features: [],
      description: "Provides 48 isolated digital inputs, with independently programmable rise and fall time responses for contact debounce or AC inputs.",
      imgCaptions: ["V280 48-channel VME isolated digital input module"],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Configuration", [["1", "5V nominal input threshold"], ["2", "24V nominal input threshold"], ["12", "24V nominal input threshold and built-in self-test (BIST)"]]],
      ],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V340 Data ******************************
      {
      name: "8-channel VME function generator with transformer coupling",
      model: "V340",
      category: ["VME", "WFG"],
      features: [],
      description: "Provides eight DDS waveform outputs, each programmable for frequency and amplitude. Synchronizable in any combination of channels to produce polyphase signals.",
      imgCaptions: ["V340 8-channel VME function generator with transformer coupling"],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Software Switchable Transformers", [["1", "none"], ["2", "1:1 ratio"], ["3", "5:1 ratio"]]],
      ],
      optionsOptional: [
        ["Advanced Features", [["1", "0", "Built-in self-test (BIST)"]]],
      ],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V344 Data ******************************
      {
      name: "8-channel VME 32 MHz arbitrary waveform generator",
      model: "V344",
      category: ["VME", "WFG"],
      features: [],
      description: "Generates eight independently programmable waveforms with standard functions, noise, and user-loaded arbitrary waveforms.",
      imgCaptions: ["V344 8-channel VME 32 MHz arbitrary waveform generator"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V346 Data ******************************
      {
      name: "8-channel VME 32 MHz arbitrary waveform generator w/ complex modulation",
      model: "V346",
      category: ["VME", "WFG"],
      features: [],
      description: "Generates sweeps, chirps, I/Q and constellations, and calibrated jitter, and simulates a wide range of radar, communications, power, encoders, and electro-mechanical systems.",
      imgCaptions: ["V346 8-channel VME 32 MHz arbitrary waveform generator w/ complex modulation"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V360 Data ******************************
      {
      name: "8-channel VME tachometer",
      model: "V360",
      category: ["VME", "MAS"],
      features: [],
      description: "Acquires low frequency inputs from industrial speed sensors and measures frequency and period over a wide dynamic range. ",
      imgCaptions: ["V360 8-channel VME tachometer"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V365 Data ******************************
      {
      name: "8-channel VME tachometer with overspeed/underspeed capability",
      model: "V365",
      category: ["VME", "MAS"],
      features: [],
      description: "Provides V360 functions plus four independent overspeed blocks, each programmable to trip on static or latched overspeed or underspeed conditions.",
      imgCaptions: ["V365 8-channel VME tachometer with overspeed/underspeed capability"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V375 Data ******************************
      {
      name: "4-channel VME arbitrary waveform generator",
      model: "V375",
      category: ["VME", "WFG"],
      features: [],
      description: "Provides accurate simulation of real-world sensor inputs, ideal for simulation of complex rotating machines.",
      imgCaptions: ["V375 4-channel VME arbitrary waveform generator"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V380 Data ******************************
      {
      name: "8-channel VME strain gauge/weighing module",
      model: "V380",
      category: ["VME", "MAS"],
      features: [],
      description: "Excites and measures up to eight strain gauge load cells, and includes tare (zero reference), DSP-based high-order filtering, averaging, and triggered weighing.",
      imgCaptions: ["V380 8-channel VME strain gauge/weighing module"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V385 Data ******************************
      {
      name: "8-channel VME strain gauge/load cell module",
      model: "V385",
      category: ["VME", "MAS"],
      features: [],
      description: "Excites and measures up to eight strain gauge load cells, with separate, remotely sensed excitation supply for each channel.",
      imgCaptions: ["V385 8-channel VME strain gauge/load cell module"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V410 Data ******************************
      {
      name: "16-channel VME RTD/resistance input module",
      model: "V410",
      category: ["VME", "MAS"],
      features: [],
      description: "Provides sixteen independent analog inputs that may be used to read cryogenic diodes, RTDs, thermistors, and other similar resistive sensors.",
      imgCaptions: ["V410 16-channel VME RTD/resistance input module"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V420 Data ******************************
      {
      name: "8-channel VME isolated resistance simulator",
      model: "V420",
      category: ["VME", "MAS"],
      features: [],
      description: "Eliminates transient errors associated with relay switching, and provides for monotonic resistance changes using entirely solid-state simulation.",
      imgCaptions: ["V420 8-channel VME isolated resistance simulator"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V450 Data ******************************
      {
      name: "16-channel VME analog/thermocouple input module",
      model: "V450",
      category: ["VME", "MAS"],
      features: [],
      description: "Acquires a wide range of DC voltages, including thermocouple temperatures, and includes four precise RTD reference junction sensors.",
      imgCaptions: ["V450 16-channel VME analog/thermocouple input module"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V460 Data ******************************
      {
      name: "16-channel VME current source and analog measurement module",
      model: "V460",
      category: ["VME", "MAS"],
      features: [],
      description: "Measures nearly any mixture of resistive-, bridge- or semiconductor-type sensors, using 4-wire connections.",
      imgCaptions: ["V460 16-channel VME current source and analog measurement module"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V470 Data ******************************
      {
      name: "16-channel VME analog output/thermocouple simulator module",
      model: "V470",
      category: ["VME", "MAS"],
      features: [
        ["16 independent, galvanically isolated analog output channels. Each channel is independently programmable for mode and output range."], 
        ["Voltage mode: provides 16-bit resolution with programmable output voltage ranges from ±25 millivolts to ±12.5 volts."],
        ["Thermocouple simulation mode: simulates most common thermocouples: types J K E T R S B and N. NIST-standard lookup tables are included to allow direct entry of simulated temperatures."],
        ["Four non-isolated precision RTD signal conditioners for reference junction temperature sensing, plus one on-board reference junction sensor. Any thermocouple simulation channel can be associated with any reference."],
        ["Provision for open thermocouple simulation."],
        ["No realtime handshaking is required; all settings may be written to module registers at VMEbus speed."],
        ["Separate calibration connector allows in-crate calibration check."],
        ["Field-wiring termination and module I/O cabling is included in the design architecture. Standard termination panels, thermocouple termination boxes, and cables are available."],
        ["Support for one or two optional 8-channel J470 isothermal junction boxes, each with integral RTD reference junction sensor, or one or two J475 field-wiring interface boards."],
        ["A version is available with an internal full-function BIST subsystem."],
        ["True floating outputs: up to three channels may be connected in series for higher output voltages."],
        ["Clearly labeled DIP switches set VME address: no jumpers, headers, or trimpots."],
      ],
      description: "Simulates most common thermocouples with sixteen independent, isolated analog outputs that may be user-programmed to operate as voltage outputs or thermocouple simulators.",
      imgCaptions: ["", "", "", ""],
      about: [
        "The V470 is a 6U VME module that provides sixteen independent, isolated analog outputs that may be user-programmed to operate as voltage outputs or thermocouple simulators. Users may write temperature or voltage values at VMEbus speed, and the microprocessor will transparently do all necessary calculations and update the channel electronics.",
        "In thermocouple simulation mode, the V470 includes lookup tables for all common thermocouple types, allowing users to write the desired temperature directly to VME registers. Any channel can be associated with any of the reference junction sensors located in the external field-wiring termination panels, or can use the onboard sensor. Cold-junction compensation is via table lookup of thermocouple potential for the type currently selected. Reference junction temperatures are readable.",
        "Two front-panel D-25 connectors interface to external analog devices. Each connector provides eight differential outputs and connections for two 4-wire RTDs. A D9 connector provides in-crate calibration check. Each isolated channel incorporates a software controlled DPDT relay that allows the channel output to be diverted to the test connector.",
        "Up to four output channels may be series-connected to provide outputs up to ±50 volts.",
        "An optional built-in-self-test (BIST) subsystem adds additional switching and an onboard ADC and firmware that allows the invocation of a full closed-loop test of all ranges of all 16 channels.",
      ],
      related: [
        "P470 8-channel benchtop thermocouple simulator",
        "V420 8-channel VME isolated resistance simulator",
        "V450 16-channel VME analog/thermocouple input module"
      ],
      specifications: [
        ["FUNCTION", ["16-channel VME analog voltage output and thermocouple simulation module"]],
        ["DEVICE TYPE", ["16-bit VME register-based slave: A24:A16:D16;", "Implements 256 16-bit registers at switch selectable addresses in the VME 16 or 24 bit addressing spaces"]],
        ["CHANNELS", ["16, programmable functions, galvanically isolated"]],
        ["RANGES", ["Programmable per channel;", "10 bipolar voltage ranges:  ±25 mV, 50 mV, 80 mV, 125 mV, 250 mV, 500 mV, 1.25 V, 2.5 V, 5 V, 12.5 V;", "Thermocouples: Types J K E T R S B N"]],
        ["RESOLUTION", ["Voltage mode, 16 bits: 0.76 μV/LSB on 25 mV range;", "Temperature simulation mode, 0.0625°C"]],
        ["OUTPUT IMPEDANCE", ["0.25 Ω max"]],
        ["OUTPUT CURRENT", ["20 mA min into short circuit indefinitely"]],
        ["OUTPUT LOADING", ["Stable for capacitive loads up to 2 μF"]],
        ["OUTPUT PROTECTION", ["Differential, short or applied ±35 V DC or peak AC;", "Common-mode, ±750 V DC or peak AC;", "ESD to 15 KV, human body model"]],
        ["RTD INPUTS", ["Four non-isolated thermocouple reference junction inputs, 100 R or 1 K 4-wire Pt 385 RTD sensor"]],
        ["RTD ACCURACY", ["±250 PPM, equiv to 0.0625°C, range -65 to +150°C"]],
        ["INPUT PROTECTION", ["Shorts to ground, ESD"]],
        ["ONBOARD SENSOR", ["Semiconductor reference junction temperature sensor, ±2°C typical accuracy"]],
        ["OPERATING TEMPERATURE", ["0 to 60°C; extended MIL/COTS ranges available"]],
        ["CALIBRATION INTERVAL", ["One year"]],
        ["POWER", ["Standard VME supplies:", ["+5 V, 0.6 A max", "+12 V, 1 A max", "-12 V, 5 mA max"]]],
        ["CONNECTORS", ["2 D25 female for channels and RTDs;", "D9 male for test"]],
        ["INDICATORS", ["LEDs indicate VME access, CPU activity, error conditions;", "Additional user programmable LED"]],
        ["PACKAGING", ["6U single-wide VME module"]],
        ["CONFORMANCE", ["ANSI/VITA 1-1994 (R2002) VMEbus spec; does not support byte writes;", "Thermocouple tables based on NIST/ITS-90", "RTD tables per IEC-751 for 385 curve RTDs"]],
      ],
      specificationsMulti: [
        ["Output Accuracy"],
        ["Error", "TYPICAL", "LIMIT 15-35°C", "LIMIT 0-60°C", "LIMIT -40-80°C"],
        ["Offset", ["±5uV", "±30ppm of range"], ["±20uV", "±175ppm of range"], ["±30uV", "±300ppm of range"], ["±40uV", "±400ppm of range"],],
        ["Gain", "±50ppm of output", "±310ppm of output", "±660ppm of output", "±940ppm of output"],
      ],
      optionsOptional: [
        "Advanced Features",
        [[null], [1, "Conformal Coating"]], // digit 1
        [[1], [2, "BIST"],], // digit 2
        ],
      accessories: [
        ["J55-1", "6' shielded D25 male to D25 male cable"],
        ["J56-1", "10' shielded D25 male to D25 male cable"],
        ["J71-1", "Dual D9 female to Agilent 34104A cable"],
        ["J75-1", "D9 female to two (2) dual banana plug cable"],
        ["J76-1", "D9 OpenCVA busing cable"],
        ["J470-1", "8-channel D25 female isothermal termination box"],
        ["J475-1", "8-channel D25 female Din rail termination panel"],
        ["J475-2", "8-channel D25 female Din rail termination panel w/ reference junction sensor"],
      ],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V490 Data ******************************
      {
      name: "16-channel VME multi-range digitizer",
      model: "V490",
      category: ["VME", "MAS"],
      features: [],
      description: "Provides triggerable, simultaneous data acquisition for mid-speed tasks with programmable preamplification and filtering.",
      imgCaptions: ["V490 16-channel VME multi-range digitizer"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V545 Data ******************************
      {
      name: "24-channel VME synchro/LVDT simulation/acquisition module",
      model: "V545",
      category: ["VME", "WFG", "MAS"],
      features: [],
      description: "Performs LVDT and synchro/resolver simulation and acquisition using internal or external excitation.",
      imgCaptions: ["V545 24-channel VME synchro/LVDT simulation/acquisition module"],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Plugin Transformers", [["1", "1:1 ratio"], ["4", "3.7:1 ratio"], ["6", "5.3:1 ratio"]]],
      ],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V550 Data ******************************
      {
      name: "8-channel VME LVDT/RVDT scanner",
      model: "V550",
      category: ["VME", "MAS"],
      features: [],
      description: "Acquires position data from up to 8 LVDT (linear variable differential transformer) position sensors.",
      imgCaptions: ["V550 8-channel VME LVDT/RVDT scanner"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },
      // ****************************** V660 Data ******************************
      {
      name: "12-channel VME picosecond resolution time-interval measurement module",
      model: "V660",
      category: ["LEG"],
      features: [],
      description: "Records the time of occurrence of twelve independent electrical pulse inputs, in time-interval or timestamp modes.",
      imgCaptions: ["V660 12-channel VME picosecond resolution time-interval measurement module"],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Inputs", [["1", "differential ECL"], ["2", "optical"]]],
      ],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      EOL: ["April 1, 2022", "April 1, 2024"],
      },

      // ****************************** V680 Data ******************************
      {
      name: "8-channel VME time-to-digital converter",
      model: "V680",
      category: ["VME", "MAS"],
      features: [],
      description: "Records the time of occurrence of eight independent electrical pulse inputs, each measured relative to a single, common reference input.",
      imgCaptions: ["V680 8-channel VME time-to-digital converter"],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Connector Type", [["1", "SMB"], ["2", "LEMO"]]],
      ],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V720 Data ******************************
      {
      name: "6-channel VME buffered electrical-to-optical converter",
      model: "V720",
      category: ["VME", "PHO"],
      features: [],
      description: "Converts ECL, NIM, TTL, and adjustable logic level inputs to fast, fiber-coupled optical signals for EMI-proof distribution of pulses, triggers, and precision timing signals.",
      imgCaptions: ["V720 6-channel VME buffered electrical-to-optical converter"],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Connector Type",[[null, "ST"], ["1", "FC"]]],    
        ["Wavelength", [["1", "850 nm"], ["3", "1310 nm"], ["5", "1550 nm"]]],
      ],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V730 Data ******************************
      {
      name: "6-channel VME optical-to-electrical converter",
      model: "V730",
      category: ["VME", "PHO"],
      features: [],
      description: "Converts fiber-coupled laser signals to ECL, NIM, or TTL logic levels for EMI-proof distribution of pulses, triggers, and precision timing signals.",
      imgCaptions: ["V730 with 850 nm wavelength / ST connectorization"],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Connector Type",[[null, "ST"], ["1", "FC"]]],    
        ["Wavelength", [["1", "850 nm"], ["3", "1310 nm"], ["5", "1550 nm"]]],
      ],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V860 Data ******************************
      {
      name: "6-channel VME pulse amplifier",
      model: "V860",
      category: ["VME", "PSG"],
      features: [],
      description: "Accepts user adjustable logic-level inputs and generates high-level, very fast positive output pulses.",
      imgCaptions: ["V860 6-channel VME pulse amplifier"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },

      // ****************************** V880 Data ******************************
      {
      name: "8-channel VME delay generator for facility timing systems",
      model: "V880",
      category: ["OEM"],
      features: [],
      description: "Distributes picosecond-precision timing pulses across physically distributed facilities.",
      imgCaptions: ["V880 8-channel VME delay generator for facility timing systems"],
      about: [],
      related: [],
      specifications: [],
      accessories: [],
      FAQs: [
        ["Do you have VxWorks drivers for your modules?", "All our VME modules are compatible with VxWorks, but unfortunately we don't have the drivers for the VxWorks environment. However, it shouldn't be a problem to create and program one since we provide a register map for the VME board including descriptions of each register."],
        ["Are your VME modules compatible with a VME64 chassis?", "Yes, all Highland VME modules are compatible with a VME64 chassis, although they only support classic VME transactions."],
      ],
      },


];

Product.deleteMany({})
  .then(() => Product.collection.insertMany(productSeed))
  .then(data => {
    console.log("Added product record(s)!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });