#!/bin/zsh

# Check if two arguments are provided
if [ "$#" -ne 2 ]; then
  echo "Usage: ./script.sh <input_file> <output_file>"
  exit 1
fi

# Get the input and output file paths from the command line arguments
input_file="$1"
output_file="$2"

# Create or overwrite the output file
: > $output_file

# Extract function names and add them to the output file
grep -E -o 'function[[:space:]]+([[:alnum:]_]+)[[:space:]]*\(' $input_file | while read -r line
do
  echo "window.${line} = ${line};" >> $output_file
done

# Extract variable names and add them to the output file
grep -E -o 'var[[:space:]]+([[:alnum:]_]+)[[:space:]]*=' $input_file | while read -r line
do
  echo "window.${line% =} = ${line% =};" >> $output_file
done

echo "Modified JavaScript code saved to $output_file"
