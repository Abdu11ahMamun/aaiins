package com.aaiins.service.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record DecideApprovalRequest(
        @NotNull(message = "Decision is required (approve: true or false)")
        Boolean approve,

        @Size(max = 2000, message = "Note must be at most 2000 characters")
        String note
) {
}
