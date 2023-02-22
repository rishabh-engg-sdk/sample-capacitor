package com.capacitor.example

import android.util.Log
import com.capacitor.example.enum.Operator
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import org.json.JSONObject
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit

private const val ARGUMENT_OPERATOR = "operator"
private const val ARGUMENT_OPERAND = "operand"
private const val ARGUMENT_OPERAND_A = "a"
private const val ARGUMENT_OPERAND_B = "b"
private const val ARGUMENT_CALCULATE_DATA = "calculateData"
private const val ARGUMENT_RESULT = "result"

@CapacitorPlugin(name = "Calculate")
class CalculatePlugin : Plugin() {

    private val tag = "CalculatePlugin"
    private val executor = Executors.newSingleThreadScheduledExecutor()

    @PluginMethod
    fun calculate(call: PluginCall) {
        try {
            Log.v(tag, "calculate(): will calculate and return result")
            executor.schedule({ parseAndCalculate(call.data) }, 1L, TimeUnit.SECONDS)
        } catch (t: Throwable) {
            Log.e(tag, "calculate(): ", t)
        }
        call.resolve()
    }

    private fun parseAndCalculate(data: JSONObject) {
        val operator = Operator.values()[data.getInt(ARGUMENT_OPERATOR)]
        val operands = data.getJSONObject(ARGUMENT_OPERAND)
        val operandA = operands.getDouble(ARGUMENT_OPERAND_A)
        val operandB = operands.getDouble(ARGUMENT_OPERAND_B)
        calculate(operator, operandA, operandB)
    }

    private fun calculate(operator: Operator, operandA: Double, operandB: Double) {
        val result = when (operator) {
            Operator.ADD -> operandA + operandB
            Operator.SUBTRACT -> operandA - operandB
            Operator.MULTIPLY -> operandA * operandB
            Operator.DIVISION -> operandA / operandB
        }
        val json = toCalculateEventDataJson(operator, operandA, operandB, result).toString()

        notifyListeners("onCalculate", JSObject(json))
    }

    private fun toCalculateEventDataJson(
        operator: Operator, operandA: Double, operandB: Double, result: Double
    ): JSONObject {
        val resultJson = JSONObject()

        val calculateDataJson = JSONObject()
        calculateDataJson.put(ARGUMENT_OPERATOR, operator.ordinal)

        val operandJson = JSONObject()
        operandJson.put(ARGUMENT_OPERAND_A, operandA)
        operandJson.put(ARGUMENT_OPERAND_B, operandB)

        calculateDataJson.put(ARGUMENT_OPERAND, operandJson)

        resultJson.put(ARGUMENT_CALCULATE_DATA, calculateDataJson)
        resultJson.put(ARGUMENT_RESULT, result)

        return resultJson
    }

}