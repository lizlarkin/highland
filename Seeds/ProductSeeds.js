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
      imgCaptions: [],
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
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** J240 Data ******************************
      {
      name: "single-channel compact pulse generator",
      model: "J240",
      category: ["DDG", "LDC"],
      features: [],
      description: "Generates fast complementary rectangular or Gaussian outputs with external triggering and adjustable trigger levels.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** J270 Data ******************************
      {
      name: "compact single-channel adjustable delay and width electrical pulse generator",
      model: "J270",
      category: ["DDG"],
      features: [],
      description: "Very compact GaN-based nanosecond high-voltage pulse generator includes adjustable time delay and pulse width.",
      imgCaptions: ["J270 Caption One", "J270 Caption Two", "J720 Caption Three"],
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
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Connector Type",[[null, "ST"], ["1", "FC"]]],    
        ["Wavelength", [["1", "850 nm"], ["3", "1310 nm"]]],
      ],
      },

      // ****************************** J724 Data ******************************
      {
      name: "single-channel compact buffered electrical-to-fiberoptic converter",
      model: "J724",
      category: ["PHO"],
      features: [],
      description: "Accepts an adjustable digital logic level input and functions as a fast fiber-coupled laser source.",
      imgCaptions: [],
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
          "Compact logic-level optical signal link receiver", 
          "Allows transport of logic levels and fast triggers over long distances in high EMI environments",
          "Fast electrical rise times",
          "Below 12 picoseconds typical RMS link jitter",
          "J730-1 and J730-11 use commonly-available 62/125 micron multimode ST or FC connectorized fiber at 850 nanometers",
          "J730-3, J730-5, J730-13, and J730-15 use singlemode or multimode ST or FC connectorized fiber at 1310 or 1550 nanometers",
      ],
      description: "Converts fiber-coupled laser signals to TTL levels.",
      imgCaptions: [],
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
      },

      // ****************************** J750 Data ******************************
      {
      name: "single-channel compact wideband amplifier",
      model: "J750",
      category: ["DDG", "PHO"],
      features: [],
      description: "Amplifies DC to 1 GHz signals with loop-through (signal pickoff) and photodiode modes.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** P330 Data ******************************
      {
      name: "4-channel capacitive level sensor simulator",
      model: "P330",
      category: ["MAS"],
      features: [],
      description: "Simulator of capacitive fuel or oil liquid level sensors can measure and report realtime excitation voltages and frequencies and simulate sensor faults.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** P348 Data ******************************
      {
      name: "dual-channel benchtop I/Q modulator",
      model: "P348",
      category: ["MAS"],
      features: [],
      description: "Simulates a wide range of inductive proximity and eddy-current transducers, such as jet engine blade tip sensors and automotive engine measurements.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** P350 Data ******************************
      {
      name: "8-channel waveform playback/ARB module",
      model: "P350",
      category: ["WFG"],
      features: [],
      description: "A standalone 8-channel waveform generator intended to play stored waveform files for aerospace simulations.",
      imgCaptions: [],
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
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** P470 Data ******************************
      {
      name: "8-channel benchtop thermocouple simulator",
      model: "P470",
      category: ["MAS"],
      features: [],
      description: "Voltage source thermocouple simulator/calibrator for system-level testing of process control and critical systems.",
      imgCaptions: ["P470 Caption 1", "P470 Caption 2", "P470 Caption 3", "P470 Caption 4"],
      about: [],
      related: [],
      specifications: [],
      },


      // ****************************** P500 Data ******************************
      {
        name: "4-channel benchtop digital delay and pulse generator",
        model: "P500",
        category: ["DDG"],
        features: [
            "4 delay and width pulse outputs A B C D and T0 start reference", 
            "Up to 1000 seconds delay with 1 picosecond resolution",
            "35 nanosecond insertion delay",
            "Less than 15 picoseconds RMS typical jitter",
            "14 MHz rep rate",
            "Custom GaN output stages make clean, fast 50-ohm pulses from 0.5 to 25 volts p-p",
            "User-friendly operation: color LCD, spinner knob, onboard help",
            "No timing errors, aborted pulses, or missed triggers during timing changes",
            "Optional isolated rear-panel high-voltage outputs",
            "Trains/frames option includes timing lists and multiple pulses per trigger",
            "Interfaces are USB, RS-232, and Ethernet with SCPI and web page controls",
            "Web page controls from any browser",
        ],
        description: "Generates delays up to 1000 seconds in 1 picosecond increments, and is capable of a high repetition rate of 14 MHz.",
        imgCaptions: [],
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
        optionsOptional: [
              ["Advanced Features", [["2", "1", "advanced pulse train/frame generation"], ["2", "1", "50V isolated high-voltage output"],["2", "1", "high stability ovenized oscillator"]]],
        ],
        accessories: [
          ["J25-1", "24 volt 65W power supply", "(1 included with purchase)"],
          ["J27-1", "2.1 x 5.5 mm barrel to pigtail power cable"],
          ["P10-1", '19" rack mount shelf (two p-boxes per rack)'],
          ["P492-1", "AC line triggering transformer for P400/P500"],
        ],
        // status: [
        //   "EOL",
        //   "Custom",
        //   "Catalog",
        // ]
      },

      // ****************************** P545 Data ******************************
      {
      name: "12-channel synchro / LVDT simulation / acquisition module",
      model: "P545",
      category: ["MAS"],
      features: [],
      description: "Sinewave processor intended for both simulation and acquisition of LVDTs, RVDTs, synchros, and resolvers.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** P620 Data ******************************
      {
      name: "6-channel isolated resistance simulator",
      model: "P620",
      category: ["MAS"],
      features: [],
      description: "RTD and resistance simulator intended for system-level testing of process control systems, FADEC engine controllers, and other critical systems.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** P730 Data ******************************
      {
      name: "dual 1:4 benchtop optical-to-electrical fanout buffer",
      model: "P730",
      category: ["PHO"],
      features: [],
      description: "Converts two fast fiber-coupled laser signals to two user-routable output banks, each consisting of four parallel buffered electrical outputs.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Wavelength", [["1", "850 nm"], ["3", "1310 nm"], ["5", "1550 nm"]]],
      ],
      },

      // ****************************** P900 Data ******************************
      {
      name: "3-phase power source and permanent-magnet alternator simulator",
      model: "P900",
      category: ["MAS"],
      features: [],
      description: "Powers shunt/chopper type voltage regulators in jet engine controller FADECs and other aircraft equipment.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T124 Data ******************************
      {
      name: "1 to 4 logic buffer",
      model: "T124",
      category: ["DDG"],
      features: [],
      description: "Provides a fast 1 to 4 fanout buffer/inverter for digital logic signals.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T130 Data ******************************
      {
      name: "single-channel picosecond EOM driver",
      model: "T130",
      category: ["DDG", "PHO"],
      features: [],
      description: "Externally-triggered pulse generator, suitable for driving 50Ω Mach-Zehnder LiNBO3 electro-optical type devices.",
      imgCaptions: ["T130 Caption 1", "T130 Caption 2", "T130 Caption 3", "T130 Caption 4"],
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
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T165 Data ******************************
      {
      name: "picosecond to nanosecond laser diode pulser",
      model: "T165",
      category: ["LDC"],
      features: [],
      description: "Combines a picosecond class pulse width generator with a precision laser diode driver.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T240 Data ******************************
      {
      name: "single-channel externally-triggered complementary-output pulse generator",
      model: "T240",
      category: ["DDG", "LDC", "PHO"],
      features: [],
      description: "Generates fast complementary pulse outputs with external triggering and programmable amplitude, width, and delay.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T340 Data ******************************
      {
      name: "4-channel compact function generator",
      model: "T340",
      category: ["WFG"],
      features: [],
      description: "Provides four DDS waveform outputs, each programmable for frequency and amplitude. Synchronizable in any combination of channels to produce polyphase signals.",
      imgCaptions: [],
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
      imgCaptions: [],
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
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T400 Data ******************************
      {
      name: "precision laser modulator system",
      model: "T400",
      category: ["OEM"],
      features: [],
      description: "Integrated beam-profile modulator for large-scale fusion and other high-energy laser installations.",
      imgCaptions: [],
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
            "Four TTL-level delay outputs, individually programmable for delay and pulse width", 
            "10 picosecond delay and width resolution, 10 second range",
            "21 nanosecond insertion delay, 16 MHz max trigger rate",
            "Low jitter, highly accurate DSP phaselock system provides crystal-clock delay accuracy with zero indeterminancy from external trigger",
            "Internal crystal oscillator timebase with external lock capability",
            "DDS synthesizer for internal trigger rates",
            "External universal power supply or 12-volt DC power",
            "RS-232 serial interface standard; Ethernet optional",
            "OEM packaged or board-only custom versions available",
        ],
        description: "Accepts an internal or external trigger and generates four precise output pulses, each user programmable in time delay and width.",
        imgCaptions: [],
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
      },

      // ****************************** T564 Data ******************************
      {
        name: "4-channel compact advanced digital delay and pulse train generator",
        model: "T564",
        category: ["DDG", "LDC"],
        features: [
            "Four TTL-level delay outputs, individually programmable for delay and pulse width range up to 10 seconds with 10 picosecond resolution", 
            "Low 20 nanosecond insertion delay",
            "Scenario generation for changing delay programs automatically",
            "Pulse train generation creates unlimited number of pulses from a single trigger",
            "Queue command programs new timings without disturbing ongoing triggers",
            "DSP phaselock system maintains crystal-clock accuracy and jitter for any delay length; parts per trillion drift using external 10 MHz reference",
            "DDS synthesizer for internal trigger rates to 16 MHz",
            "Programmable-level trigger input with divide/burst features and trigger GATE input",
            "RS-232 serial interface standard; Ethernet optional",
            "OEM packaged or board-only custom versions available",
        ],
        description: "Allows a scenario of more than 8000 frames to be preloaded and then executed in rapid succession, advancing automatically as triggers are received.",
        imgCaptions: [],
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
      category: ["DDG", "MAS"],
      features: [],
      description: "Five wide-range time stampers can snapshot the time of the rising edge of one electrical input.",
      imgCaptions: [],
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
      imgCaptions: [],
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
      category: ["DDG"],
      features: [],
      description: "Adjustable global logic level input/output levels accept LVDS, TTL, LVTTL, and LVPECL trigger, and output clean, flat pulses from an input comparator and a transformer-coupled HV power output stage.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T760 Data ******************************
      {
      name: "dual-channel compact high voltage optical-to-electrical converter",
      model: "T760",
      category: ["DDG", "PHO"],
      features: [],
      description: "Converts two digital fiberoptic inputs into high-level isolated electrical pulse outputs.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T840 Data ******************************
      {
      name: "2-channel high voltage driver",
      model: "T840",
      category: ["DDG", "PHO"],
      features: [],
      description: "Drives PLZT electro-optical modulators, piezo elements, vacuum photo devices, and similar capacitive loads.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T850 Data ******************************
      {
      name: "compact pockels cell driver",
      model: "T850",
      category: ["DDG", "PHO"],
      features: [],
      description: "Complementary standard and custom timing controllers can manage pulse picking, Q-switching, chirped pulse amplification, cavity dumping, and two-photon microscopy.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** T860 Data ******************************
      {
      name: "single-channel compact logic buffer and driver",
      model: "T860",
      category: ["DDG", "PHO"],
      features: [],
      description: "Incorporates a differential-input comparator and an output driver stage which has adjustable low and high levels and 50 ohm output impedance.",
      imgCaptions: [],
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
      imgCaptions: [],
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
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsOptional: [
            ["Advanced Features", [["21", "1", "Conformal coating"], ]],
      ],
      accessories: [],
      FAQs: [["Does the V120 come with OS support?", "We provide a fully open-source Linux driver as well as C libraries and some command line applications. See resources tab for link to download drivers."], ["Do you sell an optical cable with the V120?", "We do not sell a fiber-optic link for the V120, but we have successfully tested it with"]]
      },

      // ****************************** V124 Data ******************************
      {
      name: "VXI PCI express crate controller",
      model: "V124",
      category: ["VME", "MAS"],
      features: [],
      description: "VXI bus master crate controller, usable as a crate slot 0 arbiter or as a secondary controller.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsOptional: [
        ["Advanced Features", [["21", "1", "Conformal coating"], ]],
      ],
      },

      // ****************************** V180 Data ******************************
      {
      name: "16-channel VME AC power analysis module",
      model: "V180",
      category: ["VME", "MAS"],
      features: [],
      description: "Allows accurate and comprehensive measurement of AC power circuits by acquiring powerline current and voltage inputs.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V210 Data ******************************
      {
      name: "64-channel VME relay module",
      model: "V210",
      category: ["VME", "MAS"],
      features: [],
      description: "VME-2210 compatible relay module includes 64 SPDT relays and drivers, user-configured to operate in static or latching modes.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsOptional: [
        ["Advanced Features", [["11", "1", "Conformal coating"], ]],
      ],
      },

      // ****************************** V220 Data ******************************
      {
      name: "12-channel VME current loop/process control I/O module",
      model: "V220",
      category: ["VME", "MAS"],
      features: [],
      description: "Drives and senses transducers in computer or PLC-based control systems, and simulates complex industrial processes.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsOptional: [
        ["Advanced Features", [["2", "1", "Built-in self-test (BIST)"], ]],
      ],
      },

      // ****************************** V230 Data ******************************
      {
      name: "64-channel VME analog input module",
      model: "V230",
      category: ["VME", "MAS"],
      features: [],
      description: "VME-3122 compatible analog input module provides high channel-count data acquisition for dense monitoring applications.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsOptional: [
        ["Advanced Features", [["2", "1", "Built-in self-test (BIST)"], ["1", null, "Conformal coating"]]],
  ],
      },

      // ****************************** V250 Data ******************************
      {
      name: "64-channel VME digital input/output module",
      model: "V250",
      category: ["VME", "MAS"],
      features: [],
      description: "Provides 64 non-isolated channels of digital input/output.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V280 Data ******************************
      {
      name: "48-channel VME isolated digital input module",
      model: "V280",
      category: ["VME", "MAS"],
      features: [],
      description: "Provides 48 isolated digital inputs, with independently programmable rise and fall time responses for contact debounce or AC inputs.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Configuration", [["1", "5V nominal input threshold"], ["2", "24V nominal input threshold"], ["12", "24V nominal input threshold and built-in self-test (BIST)"]]],
      ],
      },

      // ****************************** V340 Data ******************************
      {
      name: "8-channel VME function generator with transformer coupling",
      model: "V340",
      category: ["VME", "WFG"],
      features: [],
      description: "Provides eight DDS waveform outputs, each programmable for frequency and amplitude. Synchronizable in any combination of channels to produce polyphase signals.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Software Switchable Transformers", [["1", "none"], ["2", "1:1 ratio"], ["3", "5:1 ratio"]]],
      ],
      optionsOptional: [
        ["Advanced Features", [["1", "0", "Built-in self-test (BIST)"]]],
      ],
      },

      // ****************************** V344 Data ******************************
      {
      name: "8-channel VME 32 MHz arbitrary waveform generator",
      model: "V344",
      category: ["VME", "WFG"],
      features: [],
      description: "Generates eight independently programmable waveforms with standard functions, noise, and user-loaded arbitrary waveforms.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V346 Data ******************************
      {
      name: "8-channel VME 32 MHz arbitrary waveform generator w/ complex modulation",
      model: "V346",
      category: ["VME", "WFG"],
      features: [],
      description: "Generates sweeps, chirps, I/Q and constellations, and calibrated jitter, and simulates a wide range of radar, communications, power, encoders, and electro-mechanical systems.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V360 Data ******************************
      {
      name: "8-channel VME tachometer",
      model: "V360",
      category: ["VME", "MAS"],
      features: [],
      description: "Acquires low frequency inputs from industrial speed sensors and measures frequency and period over a wide dynamic range. ",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V365 Data ******************************
      {
      name: "8-channel VME tachometer with overspeed/underspeed capability",
      model: "V365",
      category: ["VME", "MAS"],
      features: [],
      description: "Provides V360 functions plus four independent overspeed blocks, each programmable to trip on static or latched overspeed or underspeed conditions.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V375 Data ******************************
      {
      name: "4-channel VME arbitrary waveform generator",
      model: "V375",
      category: ["VME", "WFG"],
      features: [],
      description: "Provides accurate simulation of real-world sensor inputs, ideal for simulation of complex rotating machines.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V380 Data ******************************
      {
      name: "8-channel VME strain gauge/weighing module",
      model: "V380",
      category: ["VME", "MAS"],
      features: [],
      description: "Excites and measures up to eight strain gauge load cells, and includes tare (zero reference), DSP-based high-order filtering, averaging, and triggered weighing.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V385 Data ******************************
      {
      name: "8-channel VME strain gauge/load cell module",
      model: "V385",
      category: ["VME", "MAS"],
      features: [],
      description: "Excites and measures up to eight strain gauge load cells, with separate, remotely sensed excitation supply for each channel.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V410 Data ******************************
      {
      name: "16-channel VME RTD/resistance input module",
      model: "V410",
      category: ["VME", "MAS"],
      features: [],
      description: "Provides sixteen independent analog inputs that may be used to read cryogenic diodes, RTDs, thermistors, and other similar resistive sensors.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V420 Data ******************************
      {
      name: "8-channel VME isolated resistance simulator",
      model: "V420",
      category: ["VME", "MAS"],
      features: [],
      description: "Eliminates transient errors associated with relay switching, and provides for monotonic resistance changes using entirely solid-state simulation.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V450 Data ******************************
      {
      name: "16-channel VME analog/thermocouple input module",
      model: "V450",
      category: ["VME", "MAS"],
      features: [],
      description: "Acquires a wide range of DC voltages, including thermocouple temperatures, and includes four precise RTD reference junction sensors.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V460 Data ******************************
      {
      name: "16-channel VME current source and analog measurement module",
      model: "V460",
      category: ["VME", "MAS"],
      features: [],
      description: "Measures nearly any mixture of resistive-, bridge- or semiconductor-type sensors, using 4-wire connections.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V470 Data ******************************
      {
      name: "16-channel VME analog output/thermocouple simulator module",
      model: "V470",
      category: ["VME", "MAS"],
      features: [],
      description: "Simulates most common thermocouples with sixteen independent, isolated analog outputs that may be user-programmed to operate as voltage outputs or thermocouple simulators.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V490 Data ******************************
      {
      name: "16-channel VME multi-range digitizer",
      model: "V490",
      category: ["VME", "MAS"],
      features: [],
      description: "Provides triggerable, simultaneous data acquisition for mid-speed tasks with programmable preamplification and filtering.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V545 Data ******************************
      {
      name: "24-channel VME synchro/LVDT simulation/acquisition module",
      model: "V545",
      category: ["VME", "WFG", "MAS"],
      features: [],
      description: "Performs LVDT and synchro/resolver simulation and acquisition using internal or external excitation.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Plugin Transformers", [["1", "1:1 ratio"], ["4", "3.7:1 ratio"], ["6", "5.3:1 ratio"]]],
      ],
      },

      // ****************************** V550 Data ******************************
      {
      name: "8-channel VME LVDT/RVDT scanner",
      model: "V550",
      category: ["VME", "MAS"],
      features: [],
      description: "Acquires position data from up to 8 LVDT (linear variable differential transformer) position sensors.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },
      // ****************************** V660 Data ******************************
      {
      name: "12-channel VME picosecond resolution time-interval measurement module",
      model: "V660",
      category: ["VME", "MAS"],
      features: [],
      description: "Records the time of occurrence of twelve independent electrical pulse inputs, in time-interval or timestamp modes.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Inputs", [["1", "differential ECL"], ["2", "optical"]]],
      ],
      },

      // ****************************** V680 Data ******************************
      {
      name: "8-channel VME time-to-digital converter",
      model: "V680",
      category: ["VME", "MAS"],
      features: [],
      description: "Records the time of occurrence of eight independent electrical pulse inputs, each measured relative to a single, common reference input.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Connector Type", [["1", "SMB"], ["2", "LEMO"]]],
      ],
      },

      // ****************************** V720 Data ******************************
      {
      name: "6-channel VME buffered electrical-to-optical converter",
      model: "V720",
      category: ["VME", "PHO"],
      features: [],
      description: "Converts ECL, NIM, TTL, and adjustable logic level inputs to fast, fiber-coupled optical signals for EMI-proof distribution of pulses, triggers, and precision timing signals.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Connector Type",[[null, "ST"], ["1", "FC"]]],    
        ["Wavelength", [["1", "850 nm"], ["3", "1310 nm"], ["5", "1550 nm"]]],
      ],
      },

      // ****************************** V730 Data ******************************
      {
      name: "6-channel VME optical-to-electrical converter",
      model: "V730",
      category: ["VME", "PHO"],
      features: [],
      description: "Converts fiber-coupled laser signals to ECL, NIM, or TTL logic levels for EMI-proof distribution of pulses, triggers, and precision timing signals.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      optionsRequired: [
        ["Connector Type",[[null, "ST"], ["1", "FC"]]],    
        ["Wavelength", [["1", "850 nm"], ["3", "1310 nm"], ["5", "1550 nm"]]],
      ],
      },

      // ****************************** V860 Data ******************************
      {
      name: "6-channel VME pulse amplifier",
      model: "V860",
      category: ["VME", "DDG"],
      features: [],
      description: "Accepts user adjustable logic-level inputs and generates high-level, very fast positive output pulses.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
      },

      // ****************************** V880 Data ******************************
      {
      name: "8-channel VME delay generator for facility timing systems",
      model: "V880",
      category: ["OEM"],
      features: [],
      description: "Distributes picosecond-precision timing pulses across physically distributed facilities.",
      imgCaptions: [],
      about: [],
      related: [],
      specifications: [],
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