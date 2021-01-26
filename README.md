# FreeCodeCamp Drum Machine

This was part of freeCodeCamps Front End Libraries Certificate.

## components:

- drumMachine
  - SquareContainer
    - Square
      - prop of the letter
  - controlsContainer
    - powerSwitch
      - (This could be a bootstrap switch)
    - controlsDisplay
    - volumeSlider
      - (This could be a bootstrap slider)
    - bankSwitch
      - (This could be a bootstrap switch)

## State:

- power
  - type: bool
- whichBank
  - type: str
  - available values: 'bankOne' and 'bankTwo'
- bankOne
  - type: array
- bankTwo
  - type: array
- volumeValue
  - type: int
- displayValue
  - type: str
  - comes from the slider value and the clicked button
